//exercise 4

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (parameter1, parameter2) => {
    const get = getMarsTemperature()
    return setTimeout(() => console.log(`Mars temperature is: ${get} degree Celsius`), messageDelay())
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo