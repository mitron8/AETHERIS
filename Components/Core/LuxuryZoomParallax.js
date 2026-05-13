'use client';

import React, { useEffect, useRef } from 'react';

import {
	motion,
	useScroll,
	useTransform,
} from 'framer-motion';

import Lenis from '@studio-freight/lenis';

export default function LuxuryZoomParallax() {
	const container = useRef(null);

	// SMOOTH SCROLL
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.08,
			smoothWheel: true,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	// IMAGES
	const images = [
		'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

		'https://images.unsplash.com/photo-1633756952780-42dbb4f76761?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

		'https://images.unsplash.com/photo-1668362914607-b201b76fd78c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

		'https://images.unsplash.com/photo-1514496485825-8f86894d189e?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

		'https://images.unsplash.com/photo-1510507024924-fc3847d49ae2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

		'https://plus.unsplash.com/premium_photo-1672330527956-78fbebc06cdb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

		'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop',
	];

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// ORIGINAL ZOOM VALUES
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);

	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);

	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [
		scale4,
		scale5,
		scale6,
		scale5,
		scale6,
		scale8,
		scale9,
	];

	return (
		<section
			ref={container}
			className=" hidden md:block relative h-[300vh] bg-[#050505]"
		>
			<div className="sticky top-0 h-screen overflow-hidden">
				{/* BACKGROUND */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />

				{/* GOLD GLOW */}
				<div className="absolute left-1/2 top-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a46b]/10 blur-[120px]" />

				{/* ORIGINAL PARALLAX */}
				{images.map((src, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`
								absolute
								top-0
								flex
								h-full
								w-full
								items-center
								justify-center
								will-change-transform

								${
									index === 1
										? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]'
										: ''
								}

								${
									index === 2
										? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]'
										: ''
								}

								${
									index === 3
										? '[&>div]:!left-[27vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]'
										: ''
								}

								${
									index === 4
										? '[&>div]:!top-[27vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]'
										: ''
								}

								${
									index === 5
										? '[&>div]:!top-[27vh] [&>div]:!-left-[22vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]'
										: ''
								}

								${
									index === 6
										? '[&>div]:!top-[22vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]'
										: ''
								}
							`}
						>
							<div
								className="
									relative
									h-[25vh]
									w-[25vw]
									overflow-hidden
									rounded-[28px]
									border
									border-white/10
									bg-black
									shadow-2xl
								"
							>
								<img
									src={src}
									alt=""
									className="h-full w-full object-cover"
								/>

								{/* OVERLAY */}
								<div className="absolute inset-0 bg-black/25" />

								{/* GOLD BORDER */}
								<div className="absolute inset-0 rounded-[28px] border border-[#c8a46b]/20" />
							</div>
						</motion.div>
					);
				})}

				{/* VIGNETTE */}
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.92)_100%)]" />

				{/* LUXURY TEXT */}
				<div className="pointer-events-none absolute bottom-16 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-6">
					<div className="max-w-2xl">
						<p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a46b]">
							Beyond Architecture
						</p>

						<h1 className="font-serif text-5xl leading-[0.9] text-white md:text-8xl">
							Transcend
							<br />
							The Ordinary.
						</h1>

						<p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
							Experience cinematic luxury living crafted with
							timeless elegance and immersive architectural
							storytelling.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}