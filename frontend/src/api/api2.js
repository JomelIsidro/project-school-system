import axios from "axios";

export default axios.create({
	baseURL: 'https://be.talentsage.com/',
	// baseURL: 'https://uatbe.gcm3.com/',
    // baseURL: 'https://betest.gcm3.com/',
    // baseURL: 'https://localhost:443/',
  headers: { 'token' : 'cCW7PW2CRotxuALrBuMob5lXgVhY4xo'  }
});