import React from "react";

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.32)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};
const modalBox = {
  background: "var(--background-2)",
  borderRadius: 16,
  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
  padding: "32px 28px 24px 28px",
  minWidth: 320,
  maxWidth: 400,
  textAlign: "center",
  position: "relative",
};
const closeBtn = {
  position: "absolute",
  top: 12,
  right: 16,
  background: "none",
  border: "none",
  fontSize: 22,
  color: "var(--text-secondary)",
  cursor: "pointer",
};

export default function Modal({ open, onClose, children, type = "info" }) {
  if (!open) return null;
  return (
    <div style={modalOverlay} onClick={onClose}>
      <div style={modalBox} onClick={e => e.stopPropagation()}>
        <button style={closeBtn} onClick={onClose} aria-label="Fechar">×</button>
        <div style={{ marginBottom: 18, fontWeight: 600, fontSize: 18, color: 'var(--text-secondary)' }}>
          {type === 'success' ? 'Sucesso!' : 'Atenção'}
        </div>
        <div style={{ fontSize: 15, color: 'var(--text-primary)' }}>
          {children}
        </div>
        <button onClick={onClose} style={{ marginTop: 24, padding: '8px 24px', borderRadius: 8, border: 'none', background: 'var(--secondary)', color: '#fff', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>OK</button>
      </div>
    </div>
  );
} 