import * as rssJson from 'rss-to-json';
import * as cheerio from 'cheerio';
import axios from 'axios';

export interface Post {
	id?: string;
	title?: string;
	description?: string;
	link?: string;
	autho?: string;
	published?: number;
	created?: number;
	category?: Array<any>;
	content?: string | any;
	encolures?: any;
	media?: any;

	img?: string;
	imgAlt?: string;
	descriptionHtml?: string;
}

export interface Feed {
	title: string;
	description: string;
	link: string;
	image: string;
	category: Array<string>;
	items: Array<Post>;
}

// singleton
class MediumUtils {
	static __instance: MediumUtils;

	constructor() {
		MediumUtils.__instance = this;
	}

	static getInstance() {
		return MediumUtils.__instance ?? new MediumUtils();
	}

	public async fetchLatestFromFeed(): Promise<Array<Post>> {
		const mediumUrl =
			process.env.MEDIUM_URL || 'https://medium.com/feed/@imixtron?format=json';

		try {
			const feed = await rssJson.default(mediumUrl, { headers: { 'User-Agent': "Mozilla/5.0 (compatible; Rigor/1.0.0; http://imixtron.com)"}});

			console.log(feed.items[0]);

			// const { data: feed, headers} = await axios.get(mediumUrl);

			// console.log(headers);

			return feed.items.map((f) => {
				const { img, alt, description } = this.descriptionParser(f.description ?? f.content);
				const { categories, title, pubDate, link, author,  } = f;

				return {
					title,
					pubDate,
					link,
					author,
					categories,
					img,
					alt,
					description,
				};
			});
		} catch (e) {
			console.log('ola', e.response.data);
			console.log(e);
		}
	}

	private descriptionParser(descriptionHtml: string | undefined) {
		if (!descriptionHtml) {
			return {};
		}

		// console.log(descriptionHtml);

		const $ = cheerio.load(descriptionHtml);

		let lastImg = $('.medium-feed-image img').last();
		if (!lastImg || !lastImg.attr('src')) lastImg = $('figure > img').first();

		const img = lastImg.attr('src');
		const alt = lastImg.attr('alt');

		let description = $('.medium-feed-snippet').text();
		description = description?.replace(/[\n\t]/g, '').trim();
		if (!description || description == '') {
			description = $.text().replace(/[\n\t]/g, '').trim().substring(0, 150) + '...';
		}

		return { img, alt, description };
	}
}

export const MediumHandler = MediumUtils.getInstance();
