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

class MediumUtils {
	static __instance: MediumUtils;

	constructor() {
		MediumUtils.__instance = this;
	}

	static getInstance() {
		return MediumUtils.__instance ?? new MediumUtils();
	}

	public async fetchLatestFromFeed(): Promise<Post[] | null> {
        try {

            const mediumUrl = process.env.MEDIUM_URL ?? 'https://imixtron.medium.com/feed';
    
            if (!mediumUrl) {
                return null
            }
    
            // getxmldata(mediumUrl);
    
            const res: Feed = await rssJson.parse(mediumUrl, { 
                responseType: 'text',
                headers: {
                    Accept: 'application/xml',
                    "User-Agent": 'imixtron-com'
                }
            });
    
            if (!res || !res?.items) {
                return null;
            }

            return res?.items?.map((post) => {
                const descAttrs = this.descriptionParser(post?.description);
                return <Post>{ ...post, descriptionHtml: post?.description, img: descAttrs.imageSrc, imgAlt: descAttrs.imageAlt, description: descAttrs.description }
            }).sort((a:any,b:any) => b?.created - a?.created).slice(0, 4);
    
            // const latest = R.pipe(
            //     // @ts-ignore
            //     R.sort<Post>((a, b) => a.created - b.created),
            //     R.last<Post>,
            // )(res?.items)
    
            // const descAttrs = this.descriptionParser(latest?.description);
    
            // return { ...latest, descriptionHtml: latest?.description, img: descAttrs.imageSrc, imgAlt: descAttrs.imageAlt, description: descAttrs.description };
        } catch (e) {
            console.log(e);
		return [];
        }
	}

	private descriptionParser(descriptionHtml: string | undefined) {

		if (!descriptionHtml) {
			return {};
		}

		const $ = cheerio.load(descriptionHtml);

		const lastImg = $('.medium-feed-image img').last()
		const imageSrc = lastImg.attr('src');
		const imageAlt = lastImg.attr('alt')

		let description = $('.medium-feed-snippet').text();
		description = description?.replace(/[\n\t]/g, '').trim()

		return { imageSrc, imageAlt, description };
	}
}

export default async function getxmldata(xmlUrl: string) {
    try {
        // const response = await axios.get(xmlUrl, {
        //     responseType: 'text', // Ensures Axios returns raw XML as plain text
        //     headers: 
        //   });
      
        //   const xmlText = response.data;
      
        //   console.log(xmlText); // Logs XML to terminal

    //   const xmlUrl = 'https://www.example.com/feed.xml'; // replace with actual URL
  
    //   const response = await fetch(xmlUrl);
    //   if (!response.ok) {
    //     throw new Error(`Failed to fetch: ${response.status}`);
    //   }
  
    //   const xmlText = await response.text();
  
    //   console.log(xmlText); // This will show up in your terminal where the Next.js server is running
  
      // Optionally return it to client
    //   res.status(200).send(xmlText);
  
    } catch (error: any) {
      console.error('Error fetching XML:', error);
      console.log(error?.request);
    //   res.status(500).json({ error: 'Failed to fetch XML' });
    }
  }

export const MediumHandler = MediumUtils.getInstance();
