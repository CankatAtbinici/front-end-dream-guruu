
/*
export const checkLocalStorage = () => {
       const requestLength = localStorage.getItem('request_lenght')
       return Number(requestLength);
  };

  const calculateRequestLength = (request) => {
    return request ? request.length : 0;
  };
  
  export const checkRequestLength = (request) => {
    const totalLength = checkLocalStorage();
    const requestLength = calculateRequestLength(request);
    if (totalLength + requestLength > 600) {
      return "Günlük karakter limitini aştınız daha fazlası için üye olmanız gerekmektedir";
    } else {
      localStorage.setItem('request_lenght', totalLength + requestLength);
      return "Başarılı";
    }
  };
  */
  export const checkLocalStorage = () => {
    const requestLength = localStorage.getItem("request_length");
    if (requestLength) {
      const timestamp = localStorage.getItem("request_timestamp");
      if (timestamp) {
        const now = Date.now();
        const elapsed = now - Number(timestamp);
        if (elapsed > 86400000) { // 24 saat geçti mi?
          localStorage.removeItem("request_length");
          localStorage.removeItem("request_timestamp");
          return 0;
        }
      }
      return Number(requestLength);
    }
    return 0;
  };
  
  const calculateRequestLength = (request) => {
    return request ? request.length : 0;
  };
  
  export const checkRequestLength = (request) => {
    const totalLength = checkLocalStorage();
    const requestLength = calculateRequestLength(request);
    if (totalLength + requestLength > 500) {
        const returnObject = {
            message :"Günlük karakter limitini aştınız daha fazlası için üye olmanız gerekmektedir",
            success : false
        }
        return returnObject
 
    } else {
        const returnObject = {
            message :"İşlem başarılı",
            success : true
        }
      localStorage.setItem("request_length", totalLength + requestLength);
      localStorage.setItem("request_timestamp", Date.now());
      return returnObject
    }
  };
  
