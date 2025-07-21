import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "./supabaseClient";
import Modal from "./Modal";

const initialState = {
  email: "",
  phone: "",
  residence: "",
  birth_date: "",
  idea_motivation: "",
  experience_bio: "",
  education_institution: "",
};

const residences = [
  "Uíge (sede)",
  "Negage",
  "Cangola",
  "Damba",
  "Maquela do Zombo",
  "Songo",
  "Outro",
];
const institutions = [
  "ISPT Uíge",
  "ISCED Uíge",
  "Universidade Kimpa Vita",
  "Instituto Politécnico do Uíge",
  "IMAGU",
  "Outra",
];

const labelStyle = {
  minWidth: 140,
  maxWidth: 180,
  textAlign: "left",
  marginRight: 56,
  fontWeight: 500,
  color: "var(--text-secondary)",
  fontSize: 14,
  alignSelf: "center",
};
const inputStyle = {
  height: 34,
  padding: "0 14px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  fontSize: 14,
  background: "var(--background)",
  color: "var(--text-primary)",
  flex: 1,
  boxSizing: "border-box",
};
const textareaStyle = {
  ...inputStyle,
  minHeight: 64,
  padding: "12px 14px",
  height: "auto",
};
const buttonStyle = {
  height: 34,
  fontSize: 16,
  borderRadius: 8,
  marginTop: 18,
  fontWeight: 600,
  minWidth: 120,
  alignSelf: "flex-end",
};
const fieldBlock = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 32,
  width: "100%",
};
const helpTextStyle = { fontSize: 12, color: "var(--text-secondary)", marginLeft: 0, marginTop: 4 };

const formVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fieldVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" } }),
};

const RegisterPage = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const { error } = await supabase
        .from("incubation_applicants")
        .insert([
          {
            email: form.email,
            phone: form.phone,
            residence: form.residence,
            birth_date: form.birth_date,
            idea_motivation: form.idea_motivation,
            experience_bio: form.experience_bio,
            education_institution: form.education_institution,
          },
        ]);
      if (error) {
        let msg = "Erro ao enviar o cadastro. Tente novamente.";
        // Tradução de alguns erros comuns do Supabase
        if (error.message.includes("duplicate key")) {
          msg = "Este email já está cadastrado.";
        } else if (error.message.includes("invalid input syntax")) {
          msg = "Dados inválidos. Verifique os campos e tente novamente.";
        } else if (error.message.includes("null value")) {
          msg = "Preencha todos os campos obrigatórios.";
        }
        setError(msg);
        setModalOpen(true);
        setSubmitting(false);
        return;
      }
      setSuccess(true);
      setForm(initialState);
      setModalOpen(true);
    } catch (err) {
      setError(err?.message ? `Erro: ${err.message}` : "Erro inesperado. Tente novamente mais tarde.");
      setModalOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-center items-center overflow-y" style={{ minHeight: "100vh", background: "var(--background)" }}>
      <motion.form
        initial="hidden"
        animate="visible"
        variants={formVariants}
        style={{
          padding: 32,
          borderRadius: 16,
          width: 720,
          minWidth: 320,
          maxWidth: 720,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-primary" style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, textAlign: "left" }}>Cadastro para Incubação</h2>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12, textAlign: 'left', maxWidth: 540 }}>
          Preencha o formulário abaixo para participar do processo de incubação de ideias e projetos inovadores no Uíge.
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 74, height: 0, zIndex: 1, display: 'none' }}>
          {/* Linha antiga, agora oculta */}
        </div>
        <div style={{ borderBottom: '1px solid var(--border)', width: '100%', marginBottom: 28 }} />
        <motion.div style={fieldBlock} className="register-field-block" custom={0} variants={fieldVariants} initial="hidden" animate="visible">
          <label htmlFor="email" style={labelStyle} className="register-label">Email</label>
          <div style={{ flex: 1 }}>
            <input
              className="input-main"
              style={{ ...inputStyle, width: '100%' }}
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="Digite seu email"
            />
          </div>
        </motion.div>
        <motion.div style={fieldBlock} className="register-field-block" custom={1} variants={fieldVariants} initial="hidden" animate="visible">
          <label htmlFor="phone" style={labelStyle} className="register-label">Telefone</label>
          <div style={{ flex: 1 }}>
            <input
              className="input-main"
              style={{ ...inputStyle, width: '100%' }}
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              placeholder="9xx xxx xxx"
            />
          </div>
        </motion.div>
        <motion.div style={fieldBlock} className="register-field-block" custom={2} variants={fieldVariants} initial="hidden" animate="visible">
          <label htmlFor="residence" style={labelStyle} className="register-label">Residência</label>
          <div style={{ flex: 1 }}>
            <select
              className="input-main"
              style={{ ...inputStyle, width: '100%' }}
              name="residence"
              id="residence"
              value={form.residence}
              onChange={handleChange}
              required
              placeholder="Selecione sua residência"
            >
              <option value="" disabled>Selecione sua residência</option>
              {residences.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </motion.div>
        <motion.div style={fieldBlock} className="register-field-block" custom={3} variants={fieldVariants} initial="hidden" animate="visible">
          <label htmlFor="birth_date" style={labelStyle} className="register-label">Data de Nascimento</label>
          <div style={{ flex: 1 }}>
            <input
              className="input-main"
              style={{ ...inputStyle, width: '100%' }}
              type="date"
              name="birth_date"
              id="birth_date"
              value={form.birth_date}
              onChange={handleChange}
              required
              placeholder="Selecione a data"
            />
            <div style={helpTextStyle}>Você deve ter pelo menos 16 anos</div>
          </div>
        </motion.div>
        <motion.div style={fieldBlock} className="register-field-block" custom={4} variants={fieldVariants} initial="hidden" animate="visible">
          <label htmlFor="idea_motivation" style={labelStyle} className="register-label">Motivação/Ideia</label>
          <textarea
            className="input-main"
            style={textareaStyle}
            name="idea_motivation"
            id="idea_motivation"
            value={form.idea_motivation}
            onChange={handleChange}
            required
            placeholder="Conte brevemente sua ideia ou motivação para participar"
          />
        </motion.div>
        <motion.div style={fieldBlock} className="register-field-block" custom={5} variants={fieldVariants} initial="hidden" animate="visible">
          <label htmlFor="experience_bio" style={labelStyle} className="register-label">Experiência/Bio</label>
          <textarea
            className="input-main"
            style={textareaStyle}
            name="experience_bio"
            id="experience_bio"
            value={form.experience_bio}
            onChange={handleChange}
            required
            placeholder="Fale um pouco sobre você e sua experiência"
          />
        </motion.div>
        <motion.div style={fieldBlock} className="register-field-block" custom={6} variants={fieldVariants} initial="hidden" animate="visible">
          <label htmlFor="education_institution" style={labelStyle} className="register-label">Instituição de Ensino</label>
          <div style={{ flex: 1 }}>
            <select
              className="input-main"
              style={{ ...inputStyle, width: '100%' }}
              name="education_institution"
              id="education_institution"
              value={form.education_institution}
              onChange={handleChange}
              required
              placeholder="Selecione sua instituição"
            >
              <option value="" disabled>Selecione sua instituição</option>
              {institutions.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        </motion.div>
        <button
          className="btn btn-color"
          style={{ ...buttonStyle, fontSize: 14 }}
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Enviar pedido"}
        </button>
        <Modal open={modalOpen && (success || !!error)} onClose={() => { setModalOpen(false); setError(""); setSuccess(false); }} type={success ? "success" : "error"}>
          {success
            ? "Cadastro enviado com sucesso! Em breve entraremos em contato."
            : error}
        </Modal>
      </motion.form>
      {/* Adicionar cor do placeholder para todos os inputs/textarea/select */}
      <style>{`
        .input-main::placeholder {
          color: var(--text-secondary);
          opacity: 1;
        }
        .input-main::-webkit-input-placeholder { color: var(--text-secondary); }
        .input-main::-moz-placeholder { color: var(--text-secondary); }
        .input-main:-ms-input-placeholder { color: var(--text-secondary); }
        .input-main::-ms-input-placeholder { color: var(--text-secondary); }
      `}</style>
    </div>
  );
};

export default RegisterPage; 