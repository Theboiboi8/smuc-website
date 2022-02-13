import Link from 'next/link';
import {TypeFace} from './team-sigma-typeface';
import React, { lazy } from 'react';
import {Loading} from "@nextui-org/react";

const ThemeChangerLazy = lazy(() => import("./themechangerreact"))

export const Navbar = () => {
	return (
		<>
			<nav className='flex items-center bg-slate-700 flex-wrap p-3 select-none fixed w-full z-50 shadow-sm '
			     css={{
				     bf: 'saturate(180%) blur(2000px)',
				     bgColor: 'rgba(51, 65, 85, 0.5)',
			     }}>
				<Link href='/'>
					<a className='inline-flex items-center p-2 mr-4 relative '>
						<span className='text-xl text-white font-bold uppercase tracking-wide' css={{}}>
							S.M.U.C.
						</span>
					</a>
				</Link>
				<TypeFace/>
				<div className=' hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
					<div
						className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
						<React.Suspense fallback={<Loading type='points-opacity' />}>
							<ThemeChangerLazy />
						</React.Suspense>
					</div>
				</div>
			</nav>
		</>
	);
};
