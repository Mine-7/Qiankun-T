
      let options = {"masterHistoryType":"browser","base":"/","apps":[{"name":"reactApp","container":"#subapp","activeRule":"/sub-react"},{"name":"reactAppSecond","container":"#subapp","activeRule":"/sec_sub"}]};
      export const getMasterOptions = () => options;
      export const setMasterOptions = (newOpts) => options = ({ ...options, ...newOpts });
      