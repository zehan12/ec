function _get_active_mock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data:true
      });
      reject(false);
    },3000);
  });
}

export const fecthActive = async () => {
  const _mock_response = await _get_active_mock();
  return _mock_response;
};
