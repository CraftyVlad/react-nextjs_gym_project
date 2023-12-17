import s from "@/styles/header.module.scss"
import Link from "next/link";

export default function Header() {
  return (
		<>
			<header className={s.header}>
				<div className={s.header__icon}>
					<img src="dumpbell2.svg" alt="" />
					<p>ANGEL FIT</p>
				</div>

				<Link className={s.header__link} href={`/`}>
					HOME
				</Link>
				<Link className={s.header__link} href={`/coaches`}>
					COACHES
				</Link>
				<Link className={s.header__link} href={`/articles`}>
					ARTICLES
				</Link>

				<Link className={s.signUp__link} href={``}>
					GET STARTED FOR FREE &#8680;
				</Link>
			</header>
		</>
  );
}
