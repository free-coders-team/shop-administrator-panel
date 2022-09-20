import { FC, useRef } from "react";
import {
  Button,
  AlertDialog,
  useDisclosure,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

type Props = {
  open: boolean;
  title: string;
  onClickDone?(): void;
  defaultIsOpen?: boolean;
  description: string | JSX.Element;
};

const AlertMessage: FC<Props> = ({
  open,
  title,
  onClickDone,
  description,
  defaultIsOpen,
}) => {
  const cancelRef = useRef(null);

  const { isOpen, onClose } = useDisclosure({
    isOpen: open,
    defaultIsOpen,
  });

  const onDone = () => {
    onClickDone && onClickDone();
    onClose();
  };

  return (
    <AlertDialog
      size="lg"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={onDone}>Aceptar</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertMessage;
