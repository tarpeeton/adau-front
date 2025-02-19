import React from "react";
import { Modal } from "antd";
import { CheckCircle } from "react-feather"; 
import useLocale from "@/hooks/useLocale";

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
}




const SuccessModal: React.FC<SuccessModalProps> = ({ visible, onClose }) => {
    const locale = useLocale()

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      wrapClassName="rounded-lg"
    >
      <div className="flex flex-col text-center items-center justify-center p-6">
        <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
        <h2 className="text-lg 2xl:text-[20px] font-semibold text-green-500">
        {locale === 'ru' 
  ? "Ваша заявка успешно отправлена!" 
  : locale === 'uz' 
  ? "Arizangiz muvaffaqiyatli yuborildi!" 
  : "Your application has been successfully submitted!"}

        </h2>
      </div>
    </Modal>
  );
};

export default SuccessModal;
