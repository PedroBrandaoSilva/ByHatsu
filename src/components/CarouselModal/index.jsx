import { useState } from "react";
import { Overlay, Modal, Image, Close, Arrow } from "./style";

function CarouselModal({ item, onClose }) {
  const [index, setIndex] = useState(0);

  if (!item) return null;

  const next = () =>
    setIndex(prev => (prev + 1) % item.imagens.length);

  const prev = () =>
    setIndex(prev => (prev - 1 + item.imagens.length) % item.imagens.length);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <Close onClick={onClose}>✕</Close>

        <Arrow left onClick={prev}>‹</Arrow>

        <Image src={item.imagens[index]} alt={item.modelo} />

        <Arrow onClick={next}>›</Arrow>
      </Modal>
    </Overlay>
  );
}

export default CarouselModal;