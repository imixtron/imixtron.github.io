// app/api/latest-posts/route.ts

export const dynamic = 'force-dynamic';

import * as rssJson from 'rss-to-json';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';

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

            const mediumUrl = 'https://imixtron.medium.com/feed';
    
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

const MediumHandler = MediumUtils.getInstance();

export async function GET() {
  try {
    const posts = await MediumHandler.fetchLatestFromFeed();
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
