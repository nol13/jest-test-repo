import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@babel/polyfill';
import "regenerator-runtime/runtime";
//import chaiAsPromised from 'chai-as-promised';
//import chai from 'chai';


//chai.use(chaiAsPromised);

//require('chai').should();

configure({ adapter: new Adapter() });
