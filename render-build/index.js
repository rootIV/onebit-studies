import Component from "./Component.js";
import Form from "./Form.js";
import Label from "./Label.js";
import Input from "./Input.js";

const title = new Component("h1", "body", { textContent: "Formulário" });

console.log(title);
title.render();

const form = new Form("body");

const label = new Label("Nome: ", form, { htmlFor: "nameInput" });

const input = new Input(form, { id: "nameInput", name: "name" });

form.render();

label.render();
input.render();

form.addChildren(label, input);
