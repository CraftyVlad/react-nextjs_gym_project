import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, getCoach } from "../store/favourite";

interface Coach {
	coach: any;
}

export default function CoachItem({ coach }: Coach) {
	const dispatch = useDispatch();
	const id = useSelector((state) => state.favourite.coach.id);

	return (
		<div style={{ position: "relative" }}>
			<img src={coach.imgURL} alt="" />
			<Link href={`/coaches/${id}`}>
				<svg
					onClick={() => {
						dispatch(getCoach(coach));
					}}
					clipRule="evenodd"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					viewBox="0 0 24 24"
					fill="white"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						position: "absolute",
						zIndex: 999,
						bottom: 60,
						left: 300,
						height: "56px",
						width: "56px",
					}}
				>
					<path
						d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
						fillRule="nonzero"
					/>
				</svg>
			</Link>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={coach.isFavourite ? "#d00f4f" : "white"}
				onClick={() => {
					dispatch(addToFavourites(coach));
				}}
				style={{
					position: "absolute",
					zIndex: 999,
					bottom: 70,
					left: 380,
					height: "36px",
					width: "36px",
					cursor: "pointer",
				}}
			>
				<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
			</svg>
		</div>
	);
}
