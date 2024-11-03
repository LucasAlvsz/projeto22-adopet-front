import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

import * as S from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "../../hooks";
import { PetsContext } from "../../providers/PetsProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { getBreeds, getPetTypes } = useContext(PetsContext);

  const [form, , handleForm] = useForm();
  const [breeds, setBreeds] = useState([]);
  const [petTypes, setPetTypes] = useState([]);
  const [error, setError] = useState(false);
  const [files, setFiles] = useState([]);

  console.log(form);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("images", file);
    });

    Object.keys(form).forEach((key) => {
      if (form[key] !== "file") formData.append(key, form[key]);
    });

    try {
      const response = await axios.post(
        "https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev/pets/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getPetTypes().then((response) => setPetTypes(response.data));
  }, []);

  // Array.from(files).forEach((file) => {
  //   formData.append("images", file);
  // });

  return (
    <main>
      <Header />
      <S.Container>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="file">Imagem</label>
            <input
              type="file"
              name="file"
              multiple
              onChange={handleFileChange}
              placeholder="Imagem do pet"
            />

            <input
              type="text"
              name="name"
              placeholder="Nome do pet"
              onChange={handleForm}
            />

            <input
              type="text"
              name="age"
              placeholder="Idade do pet"
              onChange={handleForm}
            />

            <label htmlFor="sex">Sexo</label>
            <select name="sex" onChange={handleForm} defaultValue="">
              <option value="" disabled>
                Selecione um sexo
              </option>
              <option value="Male">Masculino</option>
              <option value="Female">Feminino</option>
            </select>

            <input
              type="text"
              name="weight"
              placeholder="Peso do pet"
              onChange={handleForm}
            />

            <label htmlFor="vaccinated">Vacinado?</label>
            <select name="vaccinated" onChange={handleForm} defaultValue="">
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>

            <input
              type=""
              name="about"
              placeholder="Sobre o pet"
              onChange={handleForm}
            />

            <label htmlFor="type">Tipo</label>

            <select
              name="petTypeId"
              placeholder="Tipo"
              defaultValue=""
              onChange={(e) => {
                handleForm(e);
                getBreeds(e.target.value).then((response) =>
                  setBreeds(response.data)
                );
              }}
            >
              <option value="" disabled>
                Selecione um tipo
              </option>
              {petTypes.map((petType) => (
                <option key={petType.id} value={petType.id}>
                  {petType.name}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="breedId">Raça</label>
          <select name="breedId" onChange={handleForm} defaultValue="">
            {breeds.length === 0 ? (
              <option value="" disabled>
                Selecione uma um tipo primeiro
              </option>
            ) : (
              <option value="" disabled>
                Selecione uma raça
              </option>
            )}
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>

          <button type="submit">Cadastrar</button>
        </form>
        <div>
          {files.length > 0 &&
            files.map((file, index) => (
              <img
                src={URL.createObjectURL(file)}
                alt={`Imagem ${index + 1}`}
                key={index}
                style={{ width: "100px", margin: "10px" }}
              />
            ))}
        </div>
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "1.2rem",
              marginTop: "1rem",
            }}
          >
            {error}
          </p>
        )}
      </S.Container>

      <Footer />
    </main>
  );
};

export default Home;
