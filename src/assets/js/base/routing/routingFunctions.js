import isCurrentPage from "../isCurrentPage";
import currentYear from "../currentYear";
import calculator from '../../components/calculator';
import mobileMenu from '../../components/mobile-menu';
import servicePopup from '../../components/service-popup';
import showClients from '../../components/show-clients';
import showDocs from '../../components/show-docs';
import showProduct from '../../components/show-product';
import showWorks from '../../components/show-works';
import sliderThree from '../../components/slider-three';
import sliderOne from '../../components/slider-one';
import showEquipment from '../../components/show-equipment';
import toggleTech from '../../components/toggle-tech';
import serviceSlider from '../../components/service-slider';
import sliderFourMobOnly from '../../components/slider-four-mobonly';
import showVacancies from '../../components/show-vacancies';
import toggleVacancy from '../../components/toggle-vacancy';

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
  sliderThree();
  sliderOne();
  showEquipment();
  toggleTech();
  serviceSlider();
  sliderFourMobOnly();
  showVacancies();
  toggleVacancy();
}
