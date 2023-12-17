import s from "@/styles/coachDetails.module.scss";
import { useSelector } from "react-redux";

export default function CoachDetails() {
	const coach = useSelector((state) => state.favourite.coach);

	return (
		<div className={s.hero}>
			<div className={s.coach_details}>
				<div className={s.left}>
					<div className={s.card}>
						<img
							src={`/${coach.imgURL}`}
							alt=""
							height="60%"
							width="100%"
						/>
						<div className={s.card_details}>
							<h2>{coach.name}</h2>
							<h3>{coach.title}</h3>
							<p>{coach.desc}</p>
						</div>
					</div>
				</div>
				<div className={s.right}>
					<div className={s.summary}>
						<h2>SUMMARY</h2>
						<h3>{coach.summary}</h3>
					</div>
					<div className={s.progressbars}>
						<div>
							<h1 className={s.progressbar_header}>
								BODYBUILDING
							</h1>
							<div
								className={s.bar_lightgrey}
								style={{
									height: "12px",
									width: "100%",
								}}
							>
								<div
									className={s.bar}
									style={{
										height: "12px",
										width: coach.bodybuilding,
									}}
								></div>
							</div>
							<h1 className={s.progressbar_header}>
								WEIGHTLIFTING
							</h1>
							<div
								className={s.bar_lightgrey}
								style={{
									height: "12px",
									width: "100%",
								}}
							>
								<div
									className={s.bar}
									style={{
										height: "12px",
										width: coach.weightlifting,
									}}
								></div>
							</div>
							<h1 className={s.progressbar_header}>RUNNING</h1>
							<div
								className={s.bar_lightgrey}
								style={{
									height: "12px",
									width: "100%",
								}}
							>
								<div
									className={s.bar}
									style={{
										height: "12px",
										width: coach.running,
									}}
								></div>
							</div>
						</div>
					</div>
					<form action="" className={s.form}>
						<h1 className={s.form_header}>CONTACT ME</h1>
						<span>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="FULL NAME"
								className={s.form_input1}
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="EMAIL"
								className={s.form_input2}
							/>
						</span>
						<textarea
							name="message"
							id="message"
							cols={30}
							rows={10}
							className={s.form_textarea}
							placeholder="MESSAGE"
						></textarea>
						<input
							type="submit"
							value="SEND"
							className={s.form_submit}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
