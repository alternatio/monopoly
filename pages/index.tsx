import type {NextPage} from 'next'
import style from '/styles/pages/Home.module.scss'
import React, {useState} from "react"

import Wrapper from "../components/Wrapper"

const Home: NextPage = () => {
	return (
		<Wrapper>
			<header className={style.header}>
				Monopoly<span className={style.accent}>*</span>
			</header>
			<main className={style.content}>
				<section className={style.intro}>
					<h2 className={style.slogan}>
						Построй свою <span className={style.accent}>империю</span>
					</h2>
					<p className={style.textBorderRight}>
						<span className={style.accent}>Монополия</span> - игра про богатых и бедных. Здесь вы можете устроить свою монополизацию, купив все компании, тем самым захватив господство среди своих друзей.
					</p>
				</section>
				<section className={style.session}>
					<div className={style.sectionHeader}>
						Сессия
					</div>
					<button className={style.button}>
						Создать
					</button>
					<button className={style.button}>
						Присоединиться
					</button>
				</section>
				<section className={style.rules}>
					<div className={style.sectionHeader}>
						Правила
					</div>
					<div className={style.rulesTitle}>
						Ходы
					</div>
					<p className={style.textBorderLeft}>
						<span className={style.accent}>Ходят,</span> бросая кости, сумма выпавших чисел - это то количество, сколько ваша фишка пересечёт клеток.
					</p>
					<div className={style.rulesTitle}>
						Клетки
					</div>
					<div className={`${style.textBorderRight} ${style.textRulesBlock}`}>
						<p>
							<span className={style.accent}>Клетки</span> имеющие на себе компанию могут быть куплены. Если игрок пришёл на чужую клетку, тот вынужден выплатить некоторую сумму за нахождение владельцу. Эта сумма указывается в информации клетки.
						</p>
						<p className={style.textNoIndent}>
							Также есть <span className={style.accent}>специальные клетки:</span>
						</p>
						<ol className={style.list}>
							<li className={style.listItem}>
								Клетка с карточкой: игроку даётся карточка со случайными событиями.
							</li>
							<li className={style.listItem}>
								Клетка начала партии - после её прохождения, игроку даётся 500$.
							</li>
							<li className={style.listItem}>
								Клетка тюрьмы, когда игрок становится на неё, он попадает в тюрьму, чтобы выйти с неё, он либо платит взятку в размере 500$, либо не ходит 2 раза.
							</li>
							<li className={style.listItem}>
								Клетка монеты. На ней вы можете поставить ставку на орла или решку, выиграв, вам даётся в два раза больше от суммы ставки.
							</li>
						</ol>
					</div>
					<div className={style.rulesTitle}>
						Компании
					</div>
					<div className={style.textBorderLeft}>
						<span className={style.accent}>Покупая компании,</span> игрок может их улучшить или продать. Улучшения повышают сумму за нахождение другого игрока на этой клетке.
					</div>
				</section>
			</main>
			<footer className={style.footer}>
				<div className={style.logo}>
					Monopoly<span className={style.accent}>*</span>
				</div>
				<div className={style.footerBottom}>
					<div>
						2022
					</div>
					<div className={style.aboutMe}>
						web developer:
						<a className={style.link} rel='noreferrer' target='_blank' href='https://github.com/alternatio'>
							alternatio
						</a>
					</div>
				</div>
			</footer>
		</Wrapper>
	)
}

export default React.memo(Home)