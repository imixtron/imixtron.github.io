'use client'

import {Box, Card, Inset, Link, Strong, Text} from '@radix-ui/themes';
import {MediumHandler} from '@/components/blog/medium-utils';
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function TopBlogPosts() {
	const [latestPosts, setLatestPosts] = useState(new Array<any>());

	useEffect(() => {
		const fetchData = async () => {
			const { data: posts } = await axios.get<Array<any>>('/api/latest-posts');
			if (!!posts) setLatestPosts(posts as any);
		}

		fetchData();
	}, [])

	return (
		<>
			{
				// JSON.stringify(latestPosts)
				latestPosts.slice(0, 4).map((post, i) => (
					<Link href={ post.link } target='_blank' key={'post-' + i}>
						<Card size="2" style={{ height: '100%' }}>
							<Inset clip="padding-box" side="top" pb="current">
								<img
									className='bwimg'
									src={post.img}
									alt={post.title}
									style={{
										display: "block",
										objectFit: "cover",
										width: "100%",
										height: 140,
										backgroundColor: "var(--gray-5)",
										filter: 'grayscale(1)'
									}}
								/>
							</Inset>
							<Text style={{ color: 'black'}} as="p" size="3">
								<Strong>{post.title}</Strong> <br />
								{/*{post.description}*/}
							</Text>
						</Card>
					</Link>
				))
			}
		</>
	)}

const CardComponent = () => {

}

