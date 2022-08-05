import * as S from "./styles"

const Discover = () => {
	return (
		<main>
			<S.Discover>
				<S.Content>
					<img
						src="http://1.bp.blogspot.com/-bLaLW1wkIUw/Tp3fNml1oHI/AAAAAAAAAPA/NpIKK7dyU1I/s1600/annoyed-cat.jpg"
						alt=""
					/>
					<S.ContentInfos>
						<S.Title>Discover</S.Title>
						<span>
							<S.InfoContainer>BRASÍLIA DF</S.InfoContainer>
							<S.InfoContainer>BRASÍLIA DF</S.InfoContainer>
						</span>
					</S.ContentInfos>
					<S.ButtonsContainer>
						<button>🍕</button>
						<button>🍔</button>
						<button>🍟</button>
					</S.ButtonsContainer>
				</S.Content>
			</S.Discover>
		</main>
	)
}

export default Discover
