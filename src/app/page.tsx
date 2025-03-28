import {Avatar, Box, Flex, Grid, Heading, Link, Section, Text} from '@radix-ui/themes';
import ExternalLink from '@/components/external-link';
import TopBlogPosts from '@/components/blog/top-blog-posts';

export default function Home() {
	return (
		<>
			<Grid p="5" columns={{initial: '1', md: '1fr 2fr'}} gap="9" width="auto">
				<Box height={{initial: 'auto', md: '500px'}}>
					<Flex direction="column" gap="5" align="center">
						<Avatar
							src="pp.png"
							fallback="IA"
							size="9"
						/>

						<Heading size="7">
							Hi, I am Imad Ali! 👋 A Software Engineer with a relentless focus on detail
						</Heading>

						<Box>
							<Text>
								I specialize in building and optimizing distributed systems that power millions of requests per day,
								ensuring they're not only fast but also cost-efficient.
								Whether it's bringing systems to life or fine-tuning them for peak performance, I thrive on turning
								complex challenges into scalable, high-performing solutions.
								<br/>
								<br/>
								I'm also a writer, sharing insights through my publication, <Link target="_blank" href="https://blog.backinagist.com">
									Back in a Gist
								</Link>, on Medium.
								<br/>
								<br/>
								If you're ready to turn your next big idea or product into reality, let's <Link href="mailto:imixtron@hotmail.com">connect</Link> and see how we can collaborate.
							</Text>
						</Box>

						<Flex gap="2">
							<ExternalLink link="https://github.com/imixtron" title="Github"/>
							<ExternalLink link="https://linkedin.com/in/imixtron/" title="LinkedIn"/>
							<ExternalLink link="https://imixtron.medium.com" title="Blog"/>
						</Flex>

					</Flex>
				</Box>

				<Flex direction="column" align="center">

					<Section style={{textAlign: 'center'}}>
						<Heading>Blog Posts</Heading> <br/>
						<Grid gap="3" columns={{initial: '1', md: 'repeat(2, auto)'}}>
							<TopBlogPosts/>
						</Grid>
					</Section>

				</Flex>
			</Grid>


		</>
	)
}
