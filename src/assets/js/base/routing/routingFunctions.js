import isCurrentPage from "../isCurrentPage";
import currentYear from "../currentYear";
import calculator from '../../components/calculator';
import mobileMenu from '../../components/mobile-menu';
import servicePopup from '../../components/service-popup';
import showClients from '../../components/show-clients';
import showDocs from '../../components/show-docs';
import showProduct from '../../components/show-product';
import showWorks from '../../components/show-works';
import slider from '../../components/slider';

export default function routingFunctions() {
  isCurrentPage();
  currentYear();
  calculator();
  mobileMenu();
  servicePopup();
  showClients();
  showDocs();
  showProduct();
  showWorks();
  slider();
}
