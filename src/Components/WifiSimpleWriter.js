import * as React from 'react';
import {View, Alert} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import NfcProxy from '../NfcProxy';

function WifiSimpleWriter() {
  const [ssid, setSsid] = React.useState('');
  const [networkKey, setNetworkKey] = React.useState('');

  const writeNdef = async () => {
    if (!ssid || !networkKey) {
      return;
    }

    let result = await NfcProxy.writeNdef({
      type: 'WIFI_SIMPLE',
      value: {ssid, networkKey},
    });
    Alert.alert(result ? 'Success' : 'Fail to write NDEF');
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="SSID"
        value={ssid}
        onChangeText={setSsid}
        style={{marginBottom: 10}}
      />

      <TextInput
        mode="outlined"
        label="Network Key"
        value={networkKey}
        onChangeText={setNetworkKey}
        style={{marginBottom: 20}}
      />

      <Button mode="contained" labelStyle={{fontSize: 20}} onPress={writeNdef}>
        WRITE
      </Button>
    </View>
  );
}

export default WifiSimpleWriter;
