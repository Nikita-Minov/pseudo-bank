import { Modal } from "antd";
import { observer } from "mobx-react";
import { useStore } from "../store/store.ts";

const TransferModal = () => {
  const { modalsStore } = useStore();

  return (
    <Modal
      title="Перевод"
      open={modalsStore.isTransferModalActive}
      onCancel={() => modalsStore.closeTransferModal()}
      onOk={() => modalsStore.closeTransferModal()}
      onClose={() => modalsStore.closeTransferModal()}
    >
      {modalsStore.transferModalText}
    </Modal>
  );
};

export default observer(TransferModal);
