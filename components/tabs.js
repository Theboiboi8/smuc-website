import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import {Card, Code, Text} from '@nextui-org/react'
import styles from '../styles/Home.module.css'
import {SnowflakeIcon} from "./snowflake";
import {Unknown} from "./unknown";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export const ExampleTabs = () => {
	let [categories] = useState({
		Commands: [
			{
				id: 1,
				title:
					<Card bordered>
						<Text>
							<Unknown />
							&nbsp; Amog (
							<Code>
								.amog
							</Code>
							)
						</Text>
					</Card>,
				version: '0.0.1',
			},
			{
				id: 2,
				title:
					<Card bordered>
						<Text>
							Toggle (
							<Code className={styles.codefont}>
								.t
							</Code>
							)
						</Text>
					</Card>,
				version: '0.0.1',
			},
		],
		Modules: [
			{
				id: 3,
				title:
					<Card bordered>
						<Text>
							<SnowflakeIcon />
							&nbsp; Freeze (
							<Code>
								.t Freeze
							</Code>
							)
						</Text>
					</Card>,
				version: '0.0.1',
			},
		],
	})

	return (
		<div className="w-full max-w-md px-2 py-16 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									'w-full py-2.5 text-sm leading-5 font-medium text-stone-700 rounded-lg',
									'focus:outline-none ',
									selected
										? 'bg-gray-400 shadow'
										: 'text-gray-400 hover:bg-white/[0.5] hover:text-white'
								)
						}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(categories).map((posts, idx) => (
						<Tab.Panel
							key={idx}
							className={classNames(
								'bg-slate-[750] rounded-xl p-3',
								'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
							)}
						>
							<ul>
								{posts.map((post) => (
									<li
										key={post.id}
										className="relative p-3 rounded-md hover:bg-coolGray-100"
									>
										<h3 className="text-sm font-medium leading-5">
											{post.title}
										</h3>

										<ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
											<li>Added in version {post.version}</li>
										</ul>

										<a
											href="#"
											className={classNames(
												'absolute inset-0 rounded-md',
												'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
											)}
										/>
									</li>
								))}
							</ul>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
