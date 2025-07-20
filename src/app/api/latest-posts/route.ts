// app/api/latest-posts/route.ts

// export const dynamic = 'force-dynamic';

// import * as rssJson from 'rss-to-json';
// import * as cheerio from 'cheerio';
// import { MediumHandler } from '@/lib/medium-util';
import { NextResponse } from 'next/server';

const postsRss = [
  {
      "id": "https://medium.com/p/4bf4cabd322f",
      "title": "Concept: Port Your Own AI",
      "description": "Port Your Own AI lets users connect their AI to apps securely, protecting business logic and enabling transparent user-paid usage",
      "link": "https://blog.backinagist.com/concept-port-your-own-ai-4bf4cabd322f?source=rss-9cdca08ed72b------2",
      "author": "Imad Ali Abbasi",
      "published": 1752962758000,
      "created": 1752962758000,
      "category": [
          "cost-optimization",
          "agentic-ai",
          "ai",
          "large-language-models",
          "chatgpt"
      ],
      "enclosures": [],
      "media": {},
      "descriptionHtml": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://blog.backinagist.com/concept-port-your-own-ai-4bf4cabd322f?source=rss-9cdca08ed72b------2\"><img src=\"https://cdn-images-1.medium.com/max/2600/0*LJ6reOgwo1ZZ2tyV\" width=\"9600\"></a></p><p class=\"medium-feed-snippet\">Port Your Own AI lets users connect their AI to apps securely, protecting business logic and enabling transparent user-paid usage</p><p class=\"medium-feed-link\"><a href=\"https://blog.backinagist.com/concept-port-your-own-ai-4bf4cabd322f?source=rss-9cdca08ed72b------2\">Continue reading on Back in a Gist »</a></p></div>",
      "img": "https://cdn-images-1.medium.com/max/2600/0*LJ6reOgwo1ZZ2tyV"
  },
  {
      "id": "https://medium.com/p/f8b75250ce9d",
      "title": "Uploading files asynchronously (S3, NestJS)",
      "description": "How to upload file on s3 asynchronously without having to put a strain on the application server",
      "link": "https://blog.backinagist.com/uploading-files-asynchronously-s3-nestjs-f8b75250ce9d?source=rss-9cdca08ed72b------2",
      "author": "Imad Ali Abbasi",
      "published": 1742767308000,
      "created": 1742767308000,
      "category": [
          "nestjs",
          "s3",
          "system-design-concepts",
          "file-upload",
          "asynchronous"
      ],
      "enclosures": [],
      "media": {},
      "descriptionHtml": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://blog.backinagist.com/uploading-files-asynchronously-s3-nestjs-f8b75250ce9d?source=rss-9cdca08ed72b------2\"><img src=\"https://cdn-images-1.medium.com/max/1792/1*98baKcD9Dist9oicXj5D2Q.jpeg\" width=\"1792\"></a></p><p class=\"medium-feed-snippet\">How to upload file on s3 asynchronously without having to put a strain on the application server</p><p class=\"medium-feed-link\"><a href=\"https://blog.backinagist.com/uploading-files-asynchronously-s3-nestjs-f8b75250ce9d?source=rss-9cdca08ed72b------2\">Continue reading on Back in a Gist »</a></p></div>",
      "img": "https://cdn-images-1.medium.com/max/1792/1*98baKcD9Dist9oicXj5D2Q.jpeg"
  },
  {
      "id": "https://medium.com/p/069c47ecc1d6",
      "title": "Slash AWS Costs: Develop Locally Without the Bills!",
      "description": "I was casually scrolling through LinkedIn when I came across a post by someone who accumulated over $1000+ in costs just by leaving AWS",
      "link": "https://blog.backinagist.com/slash-aws-costs-develop-locally-without-the-bills-069c47ecc1d6?source=rss-9cdca08ed72b------2",
      "author": "Imad Ali Abbasi",
      "published": 1742646994000,
      "created": 1742646994000,
      "category": [
          "aws",
          "aws-cost-optimization",
          "cost-optimization",
          "cloud-cost-optimization",
          "cost-saving-tips"
      ],
      "enclosures": [],
      "media": {},
      "descriptionHtml": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://blog.backinagist.com/slash-aws-costs-develop-locally-without-the-bills-069c47ecc1d6?source=rss-9cdca08ed72b------2\"><img src=\"https://cdn-images-1.medium.com/max/1390/1*cZJO6Ek1sczyCXvKfuHUfA.png\" width=\"1390\"></a></p><p class=\"medium-feed-snippet\">I was casually scrolling through LinkedIn when I came across a post by someone who accumulated over $1000+ in costs just by leaving AWS</p><p class=\"medium-feed-link\"><a href=\"https://blog.backinagist.com/slash-aws-costs-develop-locally-without-the-bills-069c47ecc1d6?source=rss-9cdca08ed72b------2\">Continue reading on Back in a Gist »</a></p></div>",
      "img": "https://cdn-images-1.medium.com/max/1390/1*cZJO6Ek1sczyCXvKfuHUfA.png"
  },
  {
      "id": "https://medium.com/p/3998f2964fb4",
      "title": "[Freebie] Create Stunning Patterns with Pyttyrn.com!",
      "link": "https://blog.backinagist.com/freebie-create-stunning-patterns-with-pyttyrn-com-3998f2964fb4?source=rss-9cdca08ed72b------2",
      "author": "Imad Ali Abbasi",
      "published": 1740438853000,
      "created": 1740438853000,
      "category": [
          "pattern-designing",
          "graphic-design",
          "design-tools",
          "digital-art",
          "pattern-maker"
      ],
      "content": "<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*OdgguSleiDDH7h92LDgtDA.png\" /><figcaption>pyttyrn.com</figcaption></figure><p>I built <a href=\"https://pyttyrn.com\"><strong>Pyttyrn.com</strong></a> while experimenting with <strong>Next.js</strong> and <strong>HTML5 Canvas</strong> — it started as a personal project, but I figured others might find it useful too. So, I decided to share it with the community for free!</p><p>It’s a simple web app that lets you <strong>import your own images, move them around, and create seamless patterns</strong>. Once you’re happy with the design, you can download it and use it anywhere, with infinite repetition. No fancy software needed — just a straightforward way to experiment with patterns.</p><p>If this sounds like something you’d enjoy, feel free to check it out. Hope it helps someone out there!</p><p><strong>👉 Visit </strong><a href=\"https://pyttyrn.com\"><strong>Pyttyrn.com</strong></a><strong> and get creating!</strong></p><p>Here is an example where i used the <a href=\"https://www.openpeeps.com/\">open peep’s</a> images to create this amazing pattern, on the right is the actual image that i created on 16:9 canvas in portrait orientation.</p><figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*Mg3q_2wTcNqjWOe42YgX3g.png\" /></figure><figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/338/1*I6-M_XVtwXaa-EbjjtOMPQ.png\" /></figure><img src=\"https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=3998f2964fb4\" width=\"1\" height=\"1\" alt=\"\"><hr><p><a href=\"https://blog.backinagist.com/freebie-create-stunning-patterns-with-pyttyrn-com-3998f2964fb4\">[Freebie] Create Stunning Patterns with Pyttyrn.com!</a> was originally published in <a href=\"https://blog.backinagist.com\">Back in a Gist</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>",
      "enclosures": [],
      "content_encoded": "<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*OdgguSleiDDH7h92LDgtDA.png\" /><figcaption>pyttyrn.com</figcaption></figure><p>I built <a href=\"https://pyttyrn.com\"><strong>Pyttyrn.com</strong></a> while experimenting with <strong>Next.js</strong> and <strong>HTML5 Canvas</strong> — it started as a personal project, but I figured others might find it useful too. So, I decided to share it with the community for free!</p><p>It’s a simple web app that lets you <strong>import your own images, move them around, and create seamless patterns</strong>. Once you’re happy with the design, you can download it and use it anywhere, with infinite repetition. No fancy software needed — just a straightforward way to experiment with patterns.</p><p>If this sounds like something you’d enjoy, feel free to check it out. Hope it helps someone out there!</p><p><strong>👉 Visit </strong><a href=\"https://pyttyrn.com\"><strong>Pyttyrn.com</strong></a><strong> and get creating!</strong></p><p>Here is an example where i used the <a href=\"https://www.openpeeps.com/\">open peep’s</a> images to create this amazing pattern, on the right is the actual image that i created on 16:9 canvas in portrait orientation.</p><figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*Mg3q_2wTcNqjWOe42YgX3g.png\" /></figure><figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/338/1*I6-M_XVtwXaa-EbjjtOMPQ.png\" /></figure><img src=\"https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=3998f2964fb4\" width=\"1\" height=\"1\" alt=\"\"><hr><p><a href=\"https://blog.backinagist.com/freebie-create-stunning-patterns-with-pyttyrn-com-3998f2964fb4\">[Freebie] Create Stunning Patterns with Pyttyrn.com!</a> was originally published in <a href=\"https://blog.backinagist.com\">Back in a Gist</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>",
      "media": {}
  }
];

// export interface Post {
//   id?: string;
//   title?: string;
//   description?: string;
//   link?: string;
//   autho?: string;
//   published?: number;
//   created?: number;
//   category?: Array<any>;
//   content?: string | any;
//   encolures?: any;
//   media?: any;

//   img?: string;
//   imgAlt?: string;
//   descriptionHtml?: string;
// }

// export interface Feed {
//   title: string;
//   description: string;
//   link: string;
//   image: string;
//   category: Array<string>;
//   items: Array<Post>;
// }

// class MediumUtils {
//   static __instance: MediumUtils;

//   constructor() {
//     MediumUtils.__instance = this;
//   }

//   static getInstance() {
//     return MediumUtils.__instance ?? new MediumUtils();
//   }

//   public async fetchLatestFromFeed(): Promise<Post[] | null> {
//         try {

//             const mediumUrl = 'https://imixtron.medium.com/feed';
    
//             if (!mediumUrl) {
//                 return null
//             }
    
//             // getxmldata(mediumUrl);
    
//             const res: Feed = await rssJson.parse(mediumUrl, { 
//                 responseType: 'text',
//                 headers: {
//                     Accept: 'application/xml',
//                     "User-Agent": 'imixtron-com'
//                 }
//             });
    
//             if (!res || !res?.items) {
//                 return null;
//             }

//             return res?.items?.map((post) => {
//                 const descAttrs = this.descriptionParser(post?.description);
//                 return <Post>{ ...post, descriptionHtml: post?.description, img: descAttrs.imageSrc, imgAlt: descAttrs.imageAlt, description: descAttrs.description }
//             }).sort((a:any,b:any) => b?.created - a?.created).slice(0, 4);
//         } catch (e) {
//             console.log(e);
//             return [];
//         }
//   }

//   private descriptionParser(descriptionHtml: string | undefined) {

//     if (!descriptionHtml) {
//       return {};
//     }

//     const $ = cheerio.load(descriptionHtml);

//     const lastImg = $('.medium-feed-image img').last()
//     const imageSrc = lastImg.attr('src');
//     const imageAlt = lastImg.attr('alt')

//     let description = $('.medium-feed-snippet').text();
//     description = description?.replace(/[\n\t]/g, '').trim()

//     return { imageSrc, imageAlt, description };
//   }
// }

// const MediumHandler = MediumUtils.getInstance();

export const revalidate = 3600;

export async function GET() {
    // // Replace "@yourusername" with the Medium handle
    // const rssUrl = 'https://imixtron.medium.com/feed';

    // // `fetch` is built into Next.js (runs on Node or Edge)
    // const res  = await fetch(rssUrl, { next: { revalidate } })
    // if (!res.ok) {
    //   return NextResponse.json(
    //     { error: `Medium returned ${res.status}` },
    //     { status: res.status }
    //   )
    // }
  
    // const xml = await res.text()
    // // Return the XML so the browser (or another server component) can consume it
    // return new NextResponse(xml, {
    //   headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    // })
  try {
    // const postsRss = await fetch("https://imixtron.medium.com/feed");
    // console.log(postsRss.body);
    // const postsRss = await MediumHandler.fetchLatestFromFeed();
    // console.log(postsRss)
    return NextResponse.json(await postsRss);
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// async function getxmldata(xmlUrl: string) {
//   try {
//       // const response = await axios.get(xmlUrl, {
//       //     responseType: 'text', // Ensures Axios returns raw XML as plain text
//       //     headers: 
//       //   });
    
//       //   const xmlText = response.data;
    
//       //   console.log(xmlText); // Logs XML to terminal

//   //   const xmlUrl = 'https://www.example.com/feed.xml'; // replace with actual URL

//   //   const response = await fetch(xmlUrl);
//   //   if (!response.ok) {
//   //     throw new Error(`Failed to fetch: ${response.status}`);
//   //   }

//   //   const xmlText = await response.text();

//   //   console.log(xmlText); // This will show up in your terminal where the Next.js server is running

//     // Optionally return it to client
//   //   res.status(200).send(xmlText);

//   } catch (error: any) {
//     console.error('Error fetching XML:', error);
//     console.log(error?.request);
//   //   res.status(500).json({ error: 'Failed to fetch XML' });
//   }
// }