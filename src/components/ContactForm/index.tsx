'use client';

import React, { useState } from 'react';
import { FormWrapper, InputGroup, Label, Input, Textarea, SubmitButton } from './styles';
import { Send } from 'lucide-react';

// Change file extension to .tsx to support JSX syntax
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de envio para API viria aqui
    alert(`Mensagem enviada!\nNome: ${formData.name}\nEmail: ${formData.email}\nDescrição: ${formData.description}`);
    // Limpar formulário após envio
    setFormData({ name: '', email: '', description: '' });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Oliver" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@abc.com" required />
        </InputGroup>
      </div>
      <InputGroup>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Type Here" required />
      </InputGroup>
      <SubmitButton type="submit">
        Enviar Mensagem <Send size={16} />
      </SubmitButton>
    </FormWrapper>
  );
};

export default ContactForm;
