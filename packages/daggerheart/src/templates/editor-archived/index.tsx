import TabsContext from '@global-design-system/react-components/dist/components/Tabs/Context/';

import { DetailProvider } from '~/context';
import DefaultLayout from '~/layouts/DefaultLayout';

import schema from './schema';
import './style.scss';

const EditorTemplate = () => {
  return (
    <DefaultLayout>
      <DetailProvider>
        <TabsContext {...schema} />
      </DetailProvider>
    </DefaultLayout>
  );
};

export default EditorTemplate;
