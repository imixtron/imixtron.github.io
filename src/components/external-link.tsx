'use client'

import {InteractiveHoverButton} from '@/components/magicui/interactive-hover-button';
import {redirect} from 'next/navigation';

export default function ExternalLink({ link, backgroundColor, color, title}) {
	const style = backgroundColor ?
		{ backgroundColor, color } : {};

	return (
		<InteractiveHoverButton onClick={() => open(link)} style={style}> {title}</InteractiveHoverButton>
	);
}
