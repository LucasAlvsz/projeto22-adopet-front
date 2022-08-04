import * as S from "./styles"

const Profile = () => {
	return (
		<S.Main>
			<S.Pictures>
				<S.Options>
					<div></div>
					<div></div>
				</S.Options>
				<img
					src="https://i.pinimg.com/564x/9e/96/dd/9e96ddd31a43bfe9914b34168fc7cee4.jpg"
					alt=""
				/>
			</S.Pictures>
			<S.Infos>
				<S.HeaderInfos>
					<span>
						<h2>Amber</h2>
						<p>Brasília - DF</p>
					</span>
					<div></div>
				</S.HeaderInfos>
				<S.PetCharacteristics>
					<S.CharacteristicContainer>
						<h4>Male</h4>
						<p>Sex</p>
					</S.CharacteristicContainer>
					<S.CharacteristicContainer>
						<h4>1 Years</h4>
						<p>Age</p>
					</S.CharacteristicContainer>
					<S.CharacteristicContainer>
						<h4>10 kg</h4>
						<p>Weight</p>
					</S.CharacteristicContainer>
				</S.PetCharacteristics>
				<S.OwnerInfos>
					<img
						src="https://i.pinimg.com/originals/5a/39/3d/5a393d60dab143a9521500b29d5edad6.jpg"
						alt=""
					/>
					<div>
						<h4>Jacobs</h4>
						<p>Amber Owner</p>
					</div>
					<span>
						<div></div>
						<div></div>
					</span>
				</S.OwnerInfos>
				<S.About>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Lorem ipsum dolor sit amet, consectetur adip
				</S.About>
				<S.Footer>
					<button>Adopt Me</button>
				</S.Footer>
			</S.Infos>
		</S.Main>
	)
}

export default Profile
