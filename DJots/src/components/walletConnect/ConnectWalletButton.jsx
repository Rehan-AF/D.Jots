import { Button } from 'antd';
import { WalletOutlined } from '@ant-design/icons ';

const ConnectWalletButton = () => {
  return (
    <div>
      <Button>
        <WalletOutlined />
        connect wallet
      </Button>
    </div>
  );
};

export default ConnectWalletButton;
