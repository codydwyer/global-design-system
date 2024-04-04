import { createContext, ReactNode, useState } from 'react';

export type DetailProps = {
  children?: ReactNode;
};

interface IDetailContext {
  isShowing: boolean;
  detail?: ReactNode;
  showDetail?: (data: ReactNode) => void;
  setShowing?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailContext = createContext<IDetailContext>({ isShowing: false });

export const DetailProvider = ({ children }: DetailProps) => {
  const [detail, setDetail] = useState<ReactNode>(null);
  const [isShowing, setShowing] = useState(false);

  const showDetail = (data: ReactNode) => {
    setShowing(true);
    setDetail(data);
  };

  return (
    <DetailContext.Provider value={{ detail, isShowing, showDetail, setShowing }}>{children}</DetailContext.Provider>
  );
};

export default DetailContext;
