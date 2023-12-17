import s from "@/styles/footer.module.scss";

export default function Footer() {
	return (
		<>
			<footer className={s.footer}>
				<div className={s.footerMenu}>
					<div className={s.column1}>
						<div className={s.column1_titles}>
							<img className={s.column1_img} src="Dumpbell.svg" />
							<h1 className={s.column1_title}>ANGEL FIT</h1>
						</div>
						<p className={s.column1_p}>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo
							dolores et ea
						</p>
					</div>

					<div className={s.column2}>
						<h1 className={s.column2_title}>INFORMATION</h1>
						<a className={s.column2_link} href="">
							ABOUT US
						</a>
						<a className={s.column2_link} href="">
							CUSTOMERS
						</a>
						<a className={s.column2_link} href="">
							CLIENTS
						</a>
						<a className={s.column2_link} href="">
							PORTFOLIO
						</a>
					</div>

					<div className={s.column3}>
						<h1 className={s.column3_title}>SERVICES</h1>
						<a className={s.column3_link} href="">
							TRAINING AT HOME
						</a>
						<a className={s.column3_link} href="">
							FITNESS FOR KIDS
						</a>
						<a className={s.column3_link} href="">
							ONLINE COACH
						</a>
						<a className={s.column3_link} href="">
							CHAMPIONS
						</a>
					</div>

					<div className={s.column4}>
						<h1 className={s.column4_title}>
							SUBSCRIBE TO NEWSLETTER
						</h1>
						<form>
							<input
								className={s.column4_input}
								type="email"
								name="email"
								id="email"
								placeholder="EMAIL"
							/>
							<input
								className={s.column4_submit}
								type="submit"
								value="SUBSCRIBE"
							/>
						</form>
					</div>
				</div>
				<div className={s.footerCopyright}>
					<div className={s.btmColumn_infoBox}>
						<p className={s.btmColumn_info}>
							Copyright @ 2020 All Rights Reserved.
						</p>
						<p className={s.btmColumn_info}>+614 434 333</p>
						<p className={s.btmColumn_info}>info@angelclub.com</p>
						<p className={s.btmColumn_info}>Sydney, Australia</p>
					</div>

					<div className={s.btmColumn_infoImgBox}>
						<img src="facebook.svg" />
						<img src="instagram.svg" />
						<img src="linkedin.svg" />
						<img src="twitter.svg" />
						<img src="youtube.svg" />
					</div>
				</div>
			</footer>
		</>
	);
}
