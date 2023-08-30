import Button from "../Button/Button";
import Input from "../Input/Input";
import ModalMessage from "../ModalMessage/ModalMessage";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [inputErrors, setInputErrors] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
  });

  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
      password: formData.password.trim() === "",
    };

    setInputErrors(errors);
  };

  const MAX_PHONE_LENGTH = 12;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value.length > MAX_PHONE_LENGTH) {
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setIsTyping((prevIsTyping) => ({
      ...prevIsTyping,
      [name]: value.trim() !== "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateForm();

    console.log("clicado", formData);
    setIsErrorOpen(true);

    if (
      Object.values(inputErrors).some((value) => value) ||
      Object.values(formData).some((value) => value.trim() === "")
    ) {
      return;
    }

    try {
      const response = await axios.post(
        "URL aqui",
        formData
      );
      console.log(response.data);
      if (response.status === 201) {
        console.log("Cadastro enviado com sucesso!");
        fetchUsers();
        setShowSuccessMessage(true);
        setErrorMessage("");
      } else {
        console.log("Erro ao cadastrar");
        setErrorMessage("Erro ao cadastrar.");
      }
    } catch (error) {
      console.log("Ocorreu um erro ao cadastrar: ", error);
      setErrorMessage("Ocorreu um erro ao cadastrar");
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("URL aqui");
      console.log(response.data.data);
    } catch (error) {
      console.log("Erro ao buscar usuários", error);
    }
  };

  return (
    <div className="w-full h-auto bg-white py-12">
      <form
        className=" md:w-3/4 lg:w-1/2 h-full m-auto py-12 flex flex-col gap-y-2 justify-center items-center bg-neutral-100 rounded-lg border-none shadow-md shadow-gray-500"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row items-center gap-x-3 pb-10">
          <img src="../../../public/logo-optimatech 1.png" alt="Logo" className="w-10 font-semibold shadow-sm" />
          <p className="font-semibold ">OPTIMATECH</p>
        </div>
        <div className="w-full px-16 pb-4 text-2xl font-semibold">Login</div>
        <Input
          legend={"Nome completo"}
          type={"text"}
          placeholder={"Digite seu nome completo"}
          name={"name"}
          value={formData.name}
          onChange={handleInputChange}
          error={isErrorOpen && inputErrors.name && !isTyping.name}
        />

        <Input
          legend={"E-mail"}
          type={"email"}
          placeholder={"xxxxxx@xxxx.com.br"}
          name={"email"}
          value={formData.email}
          onChange={handleInputChange}
          error={isErrorOpen && inputErrors.name && !isTyping.email}
        />

        <Input
          legend={"Telefone"}
          type={"tel"}
          placeholder={"(000)0000 0000"}
          maxLength={11}
          name={"phone"}
          value={formData.phone}
          onChange={handleInputChange}
          error={isErrorOpen && inputErrors.name && !isTyping.phone}
        />

        <Input
          legend={"Password"}
          type={"password"}
          placeholder={"Digite sua senha"}
          name={"password"}
          value={formData.password}
          onChange={handleInputChange}
          error={isErrorOpen && inputErrors.name && !isTyping.password}
        />

        <Button button={"Enviar"} onClick={handleSubmit} />
      </form>
      {showSuccessMessage &&
        Object.values(formData).some((value) => value.trim() !== "") && (
          <ModalMessage h3={"Cadastro enviado com sucesso!"} />
        )}

      {errorMessage &&
        Object.values(formData).some((value) => value.trim() !== "") && (
          <ModalMessage h3={"Erro: " + errorMessage} />
        )}
    </div>
  );
};

export default RegistrationForm;
