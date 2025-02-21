import React from "react";
import { Modal } from "antd";
import { XCircle } from "react-feather"; 
import useLocale from "@/hooks/useLocale";

interface ErrorModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ visible, onClose }) => {
  const locale = useLocale();

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      className="rounded-lg"
    >
      <div className="flex flex-col text-center items-center justify-center p-6">
        <div className="text-red-500 p-4 rounded-xl flex items-center justify-center">
          <XCircle className=" w-16 h-16 " />
        </div>

        <h2 className="text-lg text-red-500  2xl:text-[20px] font-semibold  mt-4">
          {locale === "ru"
            ? "Не удалось отправить"
            : locale === "uz"
            ? "Jo'natib bo'lmadi"
            : "Failed to send"}
        </h2>

        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-gray-300  font-semibold rounded-lg hover:bg-gray-400 transition"
        >
          {locale === "ru"
            ? "Вернуться к анкете"
            : locale === "uz"
            ? "Anketaga qaytish"
            : "Return to the questionnaire"}
        </button>
      </div>
    </Modal>
  );
};

