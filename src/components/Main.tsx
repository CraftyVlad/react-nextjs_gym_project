import s from "@/styles/main.module.scss";

export default function Main() {
	return (
		<>
			<div className={s.main}>
				<h2 className={s.main_title}>COACHES</h2>
				<h1 className={s.main_title2}>BUILD YOUR BODY WITH OUR BEST TRAINERS</h1>
				<p className={s.main_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<div className={s.coaches}>
					<img src="bodybuilder.jpg" alt="" />
					<img src="bodybuilder2.jpg" alt="" />
					<img src="bodybuilder3.jpg" alt="" />
				</div>
			</div>

			<div className={s.pricing}>
				<h1 className={s.pricing_title}>BEST PRICING TABLES</h1>
				<div className={s.cards}>
					<div className={s.card1}>
						<h2 className={s.card_planType}>BASIC PLAN</h2>
						<h3 className={s.card_desc}>
							HERE GOES SOME DESCRIPTION
						</h3>
						<h1 className={s.card_price}>
							$10{" "}
							<span
								style={{ fontSize: "20px", fontWeight: "400" }}
							>
								monthly
							</span>
						</h1>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<button className={s.card_moreInfo}>MORE INFO</button>
					</div>
					<div className={s.card2}>
						<h2 className={s.card_planType}>PRO PLAN</h2>
						<h3 className={s.card_desc}>
							HERE GOES SOME DESCRIPTION
						</h3>
						<h1 className={s.card_price}>
							$15{" "}
							<span
								style={{ fontSize: "20px", fontWeight: "400" }}
							>
								monthly
							</span>
						</h1>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<button className={s.card_moreInfo}>MORE INFO</button>
					</div>
					<div className={s.card3}>
						<h2 className={s.card_planType}>UNLIMITED PLAN</h2>
						<h3 className={s.card_desc}>
							HERE GOES SOME DESCRIPTION
						</h3>
						<h1 className={s.card_price}>$100</h1>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<div className={s.card_benefit}>
							<img src="tick.png" alt="" />
							<p>benefit</p>
						</div>
						<button className={s.card_moreInfo}>MORE INFO</button>
					</div>
				</div>
			</div>
		</>
	);
}
