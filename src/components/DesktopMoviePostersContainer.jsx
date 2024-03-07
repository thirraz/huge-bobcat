import { movies } from "../utils/movies"

import { SCDesktopMoviePostersContainer } from "../styles/SCDesktopMoviePostersContainer"
import { SCMovieColumn } from "../styles/SCMovieColumn"
import DesktopMoviePoster from "./DesktopMoviePoster"
import { useEffect, useRef } from "react"

export default function DesktopMoviePostersContainer() {
	const scrollerRef = useRef()
	const firstColRef = useRef()
	const secondColRef = useRef()
	const thirdColRef = useRef()
	const fourthColRef = useRef()

	function addAnimation() {
		const firstScrollerContent = [...firstColRef.current.children]
		const secondScrollerContent = [...secondColRef.current.children]
		const thirdScrollerContent = [...thirdColRef.current.children]
		const fourthScrollerContent = [...fourthColRef.current.children]

		firstScrollerContent.forEach(item => {
			const duplicatedItem = item.cloneNode(true)
			firstColRef.current.appendChild(duplicatedItem)
		})

		secondScrollerContent.forEach(item => {
			const duplicatedItem = item.cloneNode(true)
			secondColRef.current.appendChild(duplicatedItem)
		})

		thirdScrollerContent.forEach(item => {
			const duplicatedItem = item.cloneNode(true)
			thirdColRef.current.appendChild(duplicatedItem)
		})

		fourthScrollerContent.forEach(item => {
			const duplicatedItem = item.cloneNode(true)
			fourthColRef.current.appendChild(duplicatedItem)
		})
	}

	useEffect(() => {
		addAnimation()
	}, [])

	return (
		<SCDesktopMoviePostersContainer ref={scrollerRef}>
			<SCMovieColumn ref={firstColRef}>
				{movies.columnOne.map((poster, i) => (
					<DesktopMoviePoster key={i} bgImg={poster} />
				))}
			</SCMovieColumn>

			<SCMovieColumn ref={secondColRef}>
				{movies.columnTwo.map((poster, i) => (
					<DesktopMoviePoster key={i} bgImg={poster} />
				))}
			</SCMovieColumn>

			<SCMovieColumn ref={thirdColRef}>
				{movies.columnThree.map((poster, i) => (
					<DesktopMoviePoster key={i} bgImg={poster} />
				))}
			</SCMovieColumn>

			<SCMovieColumn ref={fourthColRef}>
				{movies.columnFour.map((poster, i) => (
					<DesktopMoviePoster key={i} bgImg={poster} />
				))}
			</SCMovieColumn>
		</SCDesktopMoviePostersContainer>
	)
}
