import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Adminusers = React.lazy(() => import('./views/adminusers/Adminusers'));
const Employees = React.lazy(() => import('./views/employee/Employees'));
const Empgroups = React.lazy(() => import('./views/empgroups/Empgroups'));
const Rolegroups = React.lazy(() => import('./views/rolegroups/Rolegroups'));
const Roles = React.lazy(() => import('./views/roles/Roles'));
const RoleSetting = React.lazy(() => import('./views/rolesetting/RoleSetting'));
const AddEmpGroup = React.lazy(() => import('./views/addempgroup/AddEmpGroup'));
const AddRoleGroup = React.lazy(() => import('./views/addrolegroup/AddRoleGroup'));
const AddRoles = React.lazy(() => import('./views/addroles/AddRoles'));
const AddEmployee = React.lazy(() => import('./views/addemployee/AddEmployee')); 
const SystemConfig = React.lazy(() => import('./views/systemconfig/SystemConfig'));
const Uomlist = React.lazy(() => import('./views/uomlist/Uomlist'));
const Adduom = React.lazy(() => import('./views/adduom/Adduom'));
const TaxSetting = React.lazy(() => import('./views/taxsetting/TaxSetting'));
const AddTaxType = React.lazy(() => import('./views/addtaxtype/AddTaxType'));
const AddTax = React.lazy(() => import('./views/addtax/AddTax'));
const Languages = React.lazy(() => import('./views/languages/Languages'));
const AddLanguages = React.lazy(() => import('./views/addlanguages/AddLanguages'));
const Currency = React.lazy(() => import('./views/currency/Currency'));
const AddCurrency = React.lazy(() => import('./views/addcurrency/AddCurrency'));
const CompanyProfile = React.lazy(() => import('./views/companyprofile/CompanyProfile'));
const Timezone = React.lazy(() => import('./views/timezone/Timezone')); 
const AddTimezone = React.lazy(() => import('./views/addtimezone/AddTimezone'));
const DateTime = React.lazy(() => import('./views/datetime/DateTime'));
const AddDatetime = React.lazy(() => import('./views/adddatetime/AddDatetime'));
const Local = React.lazy(() => import('./views/locale/Local'));
const Email = React.lazy(() => import('./views/email/Email'));
const SmsSetting = React.lazy(() => import('./views/smssetting/SmsSetting'));
const GoogleMap = React.lazy(() => import('./views/googlemap/GoogleMap'));
const Release = React.lazy(() => import('./views/release/Release')); 
const Messages = React.lazy(() => import('./views/messages/Messages'));
const MessageType = React.lazy(() => import('./views/messagetype/MessageType')); 
const AddMessage = React.lazy(() => import('./views/addmessage/AddMessage'));
const SocialMedia = React.lazy(() => import('./views/socialmedia/SocialMedia'));
const AddSocialmedia = React.lazy(() => import('./views/addsocialmedia/AddSocialmedia'));
const ModulesMaster = React.lazy(() => import('./views/modulesmaster/ModulesMaster'));
const Modules = React.lazy(() => import('./views/modules/Modules'));
const AddModule = React.lazy(() => import('./views/addmodule/AddModule'));
const SubModules = React.lazy(() => import('./views/submodules/SubModules'));
const AddSubModule = React.lazy(() => import('./views/addsubmodule/AddSubModule'));
const ChildSubModules = React.lazy(() => import('./views/childsubmodules/ChildSubModules')); 
const AddChildSubModule = React.lazy(() => import('./views/addchildsubmodule/AddChildSubModule'));
const ModulePages = React.lazy(() => import('./views/modulepages/ModulePages')); 
const AddPages = React.lazy(() => import('./views/addpages/AddPages'));
const BankDetails = React.lazy(() => import('./views/bankdetails/BankDetails'));
const TermsConditions = React.lazy(() => import('./views/termsconditions/TermsConditions'));
const PrivacyPolicy = React.lazy(() => import('./views/privacypolicy/PrivacyPolicy')); 
const Faqs = React.lazy(() => import('./views/faqs/Faqs'));
const AddFaqs = React.lazy(() => import('./views/addfaqs/AddFaqs'));  
const BackupRestore = React.lazy(() => import('./views/backuprestore/BackupRestore')); 
const FilesMaster = React.lazy(() => import('./views/filesmaster/FilesMaster'));  
const FilesPermission = React.lazy(() => import('./views/filespermission/FilesPermission')); 
const FilesTypes = React.lazy(() => import('./views/filestypes/FilesTypes'));
const FilesLocation = React.lazy(() => import('./views/fileslocation/FilesLocation'));


const Filesset = React.lazy(() => import('./views/filesset/Filesset'));
const AddFilesset = React.lazy(() => import('./views/addfilesset/AddFilesset')); 
const AdvancedSearch = React.lazy(() => import('./views/advancedsearch/AdvancedSearch'));
const RegMasters = React.lazy(() => import('./views/regmasters/RegMasters'));  
const RegCategories = React.lazy(() => import('./views/regcategory/RegCategories'));
const AddRegCategory = React.lazy(() => import('./views/addregcategory/AddRegCategory'));
const RegSubCategories = React.lazy(() => import('./views/regsubcategory/RegSubCategories')); 
const AddRegSub = React.lazy(() => import('./views/addregsubcategory/AddRegSub'));
const RegSubChild = React.lazy(() => import('./views/regsubchild/RegSubChild')); 
const AddRegSubChild = React.lazy(() => import('./views/addregsubchild/AddRegSubChild'));  
const Payments = React.lazy(() => import('./views/payments/Payments'));
const AddPayments = React.lazy(() => import('./views/addpayments/AddPayments'));  
const Colours = React.lazy(() => import('./views/colours/Colours')); 
const SizeMaster = React.lazy(() => import('./views/sizemaster/SizeMaster'));
const AddSizes = React.lazy(() => import('./views/addsizes/AddSizes'));  
const Shapes = React.lazy(() => import('./views/shapes/Shapes')); 
const AddShapes = React.lazy(() => import('./views/addshapes/AddShapes')); 
const PriceRanges = React.lazy(() => import('./views/priceranges/PriceRanges'));  
const AddRanges = React.lazy(() => import('./views/addranges/AddRanges'));  
const ProductPattern = React.lazy(() => import('./views/productpattern/ProductPattern'));  
const AddPattern = React.lazy(() => import('./views/addpatterns/AddPattern'));   
const ProductTypes = React.lazy(() => import('./views/producttype/ProductTypes')); 
const AddProductType = React.lazy(() => import('./views/addproducttype/AddProductType'));  
const ProductMaterials = React.lazy(() => import('./views/productmaterial/ProductMaterials'));  
const AddProductMaterials = React.lazy(() => import('./views/addproductmaterials/AddProductMaterials'));    
const FramesType = React.lazy(() => import('./views/framestype/FramesType'));  
const AddFrameType = React.lazy(() => import('./views/addframetype/AddFrameType'));  
const ProductStyle = React.lazy(() => import('./views/productstyle/ProductStyle'));  
const AddProductStyle = React.lazy(() => import('./views/addproductstyle/AddProductStyle'));    
const ProductFinishing = React.lazy(() => import('./views/productfinishing/ProductFinishing'));  
const AddFinishingType = React.lazy(() => import('./views/addfinishingtype/AddFinishingType'));  
const PackingType = React.lazy(() => import('./views/packingtype/PackingType'));    
const AddPackType = React.lazy(() => import('./views/addpacktype/AddPackType'));  
const ZonesList = React.lazy(() => import('./views/zones/ZonesList'));    
const Countries = React.lazy(() => import('./views/countries/Countries'));  
const AddCountry = React.lazy(() => import('./views/addcountry/AddCountry'));  
const States = React.lazy(() => import('./views/states/States'));
const AddState = React.lazy(() => import('./views/addstate/AddState'));  

const Cities = React.lazy(() => import('./views/cities/Cities'));   
const AddCity = React.lazy(() => import('./views/addcity/AddCity'));
const AreasMaster = React.lazy(() => import('./views/areasmaster/AreasMaster'));    
const AddAreas = React.lazy(() => import('./views/addareas/AddAreas'));    
const ShippingZones = React.lazy(() => import('./views/shippingzones/ShippingZones'));    
const AddShippingZone = React.lazy(() => import('./views/addshippingzone/AddShippingZone'));
const Stores = React.lazy(() => import('./views/stores/Stores'));  
const AddStore = React.lazy(() => import('./views/addstore/AddStore'));   
const FiscalYears = React.lazy(() => import('./views/fiscalyears/FiscalYears'));    
const AddFiscalYear = React.lazy(() => import('./views/addfiscalyear/AddFiscalYear'));   
const Carousel = React.lazy(() => import('./views/carousel/Carousel'));    
const FrontMenuBar = React.lazy(() => import('./views/frontmenubar/FrontMenuBar'));  
const AddMenu = React.lazy(() => import('./views/addmenu/AddMenu'));   
const FrontSideBar = React.lazy(() => import('./views/frontsidebar/FrontSideBar'));  
const AddSideMenu = React.lazy(() => import('./views/addsidemenu/AddSideMenu'));
const FrontFooterBar = React.lazy(() => import('./views/frontfooterbar/FrontFooterBar'));  
const AddFooterMenu = React.lazy(() => import('./views/addfootermenu/AddFooterMenu'));   
const PaymentWallets = React.lazy(() => import('./views/paymentwallets/PaymentWallets'));  
const AddWallet = React.lazy(() => import('./views/addwallet/AddWallet'));
const Vendors = React.lazy(() => import('./views/base/vendors/Vendors'));  
const Customers = React.lazy(() => import('./views/base/customers/Customers'));
const TaxClasses = React.lazy(() => import('./views/taxclasses/TaxClasses'));
const TaxCalculate = React.lazy(() => import('./views/taxcalculate/TaxCalculate'));
const PriceDisplay = React.lazy(() => import('./views/pricedisplay/PriceDisplay'));
const CartDisplay = React.lazy(() => import('./views/cartdisplay/CartDisplay'));
const InvoiceDisplay = React.lazy(() => import('./views/invoicedisplay/InvoiceDisplay'));  
const CurrencyFormat = React.lazy(() => import('./views/currencyformat/CurrencyFormat'));
const BillingAddress = React.lazy(() => import('./views/billingaddress/BillingAddress'));  
const AddNewFormat = React.lazy(() => import('./views/addnewformat/AddNewFormat')); 
const PhoneNumbers = React.lazy(() => import('./views/phonenumbers/PhoneNumbers')); 
const Files = React.lazy(() => import('./views/files/Files'));   
const AddFiles = React.lazy(() => import('./views/addfiles/AddFiles')); 
const TakeBackup = React.lazy(() => import('./views/takebackup/TakeBackup'));  
const FaqsCategory = React.lazy(() => import('./views/faqscategory/FaqsCategory'));
const AddFaqsCategory = React.lazy(() => import('./views/addfaqcategory/AddFaqsCategory'));    
const FaqsSetting = React.lazy(() => import('./views/faqssetting/FaqsSetting'));
const StoresDetails = React.lazy(() => import('./views/storesdetails/StoresDetails'));   
const PaintingType = React.lazy(() => import('./views/paintingtype/PaintingType'));  
const AddPaintType = React.lazy(() => import('./views/addpainttype/AddPaintType')); 
const Dimensions = React.lazy(() => import('./views/dimensions/Dimensions')); 
const AddVendors = React.lazy(() => import('./views/addvendors/AddVendors'));      
const VendorsBilling = React.lazy(() => import('./views/vendorsbilling/VendorsBilling'));  
const VendorsBank = React.lazy(() => import('./views/vendorsbank/VendorsBank'));  
const VendorsDetails = React.lazy(() => import('./views/vendorsdetails/VendorsDetails'));     
const AddCustomers = React.lazy(() => import('./views/addcustomers/AddCustomers'));   
const CustomerOffice = React.lazy(() => import('./views/customeroffice/CustomerOffice'));    
const CustomerOtheradd = React.lazy(() => import('./views/customerotheradd/CustomerOtheradd'));  
const CustomerDetails = React.lazy(() => import('./views/customerdetails/CustomerDetails'));   
const Category = React.lazy(() => import('./views/base/category/Category')); 
const Main = React.lazy(() => import('./views/base/main/Main'));
const AddMain = React.lazy(() => import('./views/addmain/AddMain'));    
const AddCategory = React.lazy(() => import('./views/addcategory/AddCategory'));  
const SubCategory = React.lazy(() => import('./views/base/subcategory/SubCategory'));    
const AddSubCategory = React.lazy(() => import('./views/addsubcategory/AddSubCategory')); 
const ProductGroups = React.lazy(() => import('./views/base/productgroups/ProductGroups'));
const AddProductGroups = React.lazy(() => import('./views/addproductgroups/AddProductGroups')); 
const ProductBrands = React.lazy(() => import('./views/base/productbrands/ProductBrands'));   
const Publish = React.lazy(() => import('./views/base/publish/Publish'));  
const AddProductBrands = React.lazy(() => import('./views/addproductbrand/AddProductBrands'));   
const ProductVariants = React.lazy(() => import('./views/base/productvariants/ProductVariants'));  
const Manufacturers = React.lazy(() => import('./views/base/manufacturers/Manufacturers'));    
const AddManufacturers = React.lazy(() => import('./views/addmanufacturers/AddManufacturers'));
const AddPublish = React.lazy(() => import('./views/addpublish/AddPublish')); 
const AddProductsKit = React.lazy(() => import('./views/addproductskit/AddProductsKit')); 
const AddKitItems = React.lazy(() => import('./views/addkititems/AddKitItems'));   
const EditKitPrice = React.lazy(() => import('./views/editkitprice/EditKitPrice'));  
const StoreBins = React.lazy(() => import('./views/storebins/StoreBins'));
const Inventory = React.lazy(() => import('./views/inventory/Inventory'));    
const ProductsKit = React.lazy(() => import('./views/base/productskit/ProductsKit'));  
const BinsTransfer = React.lazy(() => import('./views/binstransfer/BinsTransfer'));     
const AddStoreBins = React.lazy(() => import('./views/addstorebins/AddStoreBins')); 
const EditQuantity = React.lazy(() => import('./views/editquantity/EditQuantity'));  
const EditBinQuantity = React.lazy(() => import('./views/editbinquantity/EditBinQuantity')); 
const StoresTransfer = React.lazy(() => import('./views/storestransfer/StoresTransfer'));   
const DigitalPublish = React.lazy(() => import('./views/digitalpublish/DigitalPublish')); 
const EventsPublish = React.lazy(() => import('./views/eventspublish/EventsPublish'));     
const AuctionsPublish = React.lazy(() => import('./views/auctionspublish/AuctionsPublish'));    
const Organizers = React.lazy(() => import('./views/base/organizers/Organizers'));     
const AddOrganizers = React.lazy(() => import('./views/addorganizers/AddOrganizers'));  
const AddSponsors = React.lazy(() => import('./views/addsponsors/AddSponsors')); 
const Sponsors = React.lazy(() => import('./views/base/sponsors/Sponsors')); 
const SponsorsProposal = React.lazy(() => import('./views/sponsorsproposal/SponsorsProposal'));   
const SendProposal = React.lazy(() => import('./views/sendproposal/SendProposal')); 
const Attendees = React.lazy(() => import('./views/base/attendees/Attendees'));   
const InviteList = React.lazy(() => import('./views/invitelist/InviteList')); 
const SendInvite = React.lazy(() => import('./views/sendinvite/SendInvite'));  
const DamagedStock = React.lazy(() => import('./views/damagedstock/DamagedStock'));
const Remarks = React.lazy(() => import('./views/remarks/Remarks'));
const EventsMaster = React.lazy(() => import('./views/base/eventsmaster/EventsMaster'));   
const Exhibitors = React.lazy(() => import('./views/base/exhibitors/Exhibitors'));     
const ExhibitorsReg = React.lazy(() => import('./views/exhibitorsreg/ExhibitorsReg'));      
const SponsorsRegList = React.lazy(() => import('./views/sponsorsreglist/SponsorsRegList'));   
const SponsorsReg = React.lazy(() => import('./views/sponsorsreg/SponsorsReg')); 
const OrdersManage = React.lazy(() => import('./views/base/ordersmanage/OrdersManage'));  
const OrdersView = React.lazy(() => import('./views/ordersview/OrdersView'));  
const OrderCreate = React.lazy(() => import('./views/ordercreate/OrderCreate'));  
const ConfirmOrders = React.lazy(() => import('./views/base/confirmorders/ConfirmOrders'));     
const OrdersProcess = React.lazy(() => import('./views/base/ordersprocess/OrdersProcess'));     
const AwaitingDispatch = React.lazy(() => import('./views/base/awaitingdispatch/AwaitingDispatch'));
const PickedupbyDriver = React.lazy(() => import('./views/base/pickedupbydriver/PickedupbyDriver'));    
const OnRoute = React.lazy(() => import('./views/base/onroute/OnRoute'));    
const OrdersDelivered = React.lazy(() => import('./views/base/ordersdelivered/OrdersDelivered'));     
const OrdersReturned = React.lazy(() => import('./views/base/ordersreturned/OrdersReturned'));     
const OrdersCancelled = React.lazy(() => import('./views/base/orderscancelled/OrdersCancelled'));      
const ProcessView = React.lazy(() => import('./views/processview/ProcessView'));   
const AwaitDispatchView = React.lazy(() => import('./views/awaitdispatchview/AwaitDispatchView'));  
const PickedupView = React.lazy(() => import('./views/pickedupview/PickedupView'));  
const OnrouteView = React.lazy(() => import('./views/onrouteview/OnrouteView'));     
const DeliveredView = React.lazy(() => import('./views/deliveredview/DeliveredView'));   
const ReturnedView = React.lazy(() => import('./views/returnedview/ReturnedView'));     
const CancelledView = React.lazy(() => import('./views/cancelledview/CancelledView'));    
const OutboundOrders = React.lazy(() => import('./views/base/outboundorders/OutboundOrders')); 
const PartiallyPicked = React.lazy(() => import('./views/base/partiallypicked/PartiallyPicked')); 
const PartiallyCancelled = React.lazy(() => import('./views/base/partiallycancelled/PartiallyCancelled')); 
const PackedOrders = React.lazy(() => import('./views/base/packedorders/PackedOrders')); 
const PartialPickView = React.lazy(() => import('./views/partialpickview/PartialPickView'));      
const ShippmentSetting = React.lazy(() => import('./views/base/shippmentsetting/ShippmentSetting'));     
      
const OutboundView = React.lazy(() => import('./views/outboundview/OutboundView'));
const DeliverySlots = React.lazy(() => import('./views/base/deliveryslots/DeliverySlots'));
const ShippingSlots = React.lazy(() => import('./views/base/shippingslots/ShippingSlots'));     
const AddShipSlot = React.lazy(() => import('./views/addshipslot/AddShipSlot'));
const AddDeliverySlot = React.lazy(() => import('./views/adddeliveryslot/AddDeliverySlot'));   
const HubsList = React.lazy(() => import('./views/base/hubslist/HubsList'));     
const HubDetails = React.lazy(() => import('./views/base/hubdetails/HubDetails'));
const ShipCustomers = React.lazy(() => import('./views/base/shipcustomers/ShipCustomers'));   
const NotificationsList = React.lazy(() => import('./views/notificationslist/NotificationsList'));      
const RolesPrivilege = React.lazy(() => import('./views/rolesprivilege/RolesPrivilege'));
const AddShipZones = React.lazy(() => import('./views/addshipzones/AddShipZones'));     
const ShippingOrders = React.lazy(() => import('./views/base/shippingorders/ShippingOrders'));    
const TransferOrders = React.lazy(() => import('./views/base/transferorders/TransferOrders'));    
const ReconcileOrders = React.lazy(() => import('./views/base/reconcileorders/ReconcileOrders'));
const ReceivablesOrders = React.lazy(() => import('./views/base/receivablesorders/ReceivablesOrders'));
const ReceivablesViews = React.lazy(() => import('./views/base/receivablesviews/ReceivablesViews'));
const OrdersOverView = React.lazy(() => import('./views/base/ordersoverview/OrdersOverView'));    
const OverviewDetails = React.lazy(() => import('./views/overviewdetails/OverviewDetails'));
const PendingAgent = React.lazy(() => import('./views/base/pendingagent/PendingAgent'));   
const PendingOverview = React.lazy(() => import('./views/pendingoverview/PendingOverview'));
const PaidAgent = React.lazy(() => import('./views/base/paidagent/PaidAgent'));     
const BannersManage = React.lazy(() => import('./views/bannersmanage/BannersManage'));
const PaidOverview = React.lazy(() => import('./views/paidoverview/PaidOverview'));    
const CompanyBanks = React.lazy(() => import('./views/base/companybanks/CompanyBanks')); 
const VendorsBanks = React.lazy(() => import('./views/base/vendorsbanks/VendorsBanks'));  
const BankInquiry = React.lazy(() => import('./views/base/bankinquiry/BankInquiry'));  
const BankTransfer = React.lazy(() => import('./views/banktransfer/BankTransfer'));  
const SelectMembers = React.lazy(() => import('./views/selectmembers/SelectMembers'));  
const EmailsSetting = React.lazy(() => import('./views/emailssetting/EmailsSetting'));    
const NotificationsSet = React.lazy(() => import('./views/notificationsset/NotificationsSet'));     
const BannersGroup = React.lazy(() => import('./views/bannersgroup/BannersGroup'));    
const AddBannersGroup = React.lazy(() => import('./views/addbannergrp/AddBannersGroup'));  
const AddBanners = React.lazy(() => import('./views/addbanners/AddBanners'));    
const UsersMaster = React.lazy(() => import('./views/base/usersmaster/UsersMaster'));    
const ShippingStaff = React.lazy(() => import('./views/shippingstaff/ShippingStaff')); 
const AssignVehicle = React.lazy(() => import('./views/assignvehicle/AssignVehicle'));    
const OrdersReport = React.lazy(() => import('./views/ordersreport/OrdersReport'));
const ReportOrders = React.lazy(() => import('./views/base/reportorders/ReportOrders'));
const BasketOrders = React.lazy(() => import('./views/base/basketorders/BasketOrders'));  
const DeliveredReports = React.lazy(() => import('./views/base/deliveredreports/DeliveredReports'));  

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/eventsmaster', name: 'EventsMaster', component: EventsMaster }, 
   { path: '/base/exhibitors', name: 'Exhibitors', component: Exhibitors },
    { path: '/base/companybanks', name: 'CompanyBanks', component: CompanyBanks },
	 { path: '/base/vendorsbanks', name: 'VendorsBanks', component: VendorsBanks },
	  { path: '/base/bankinquiry', name: 'BankInquiry', component: BankInquiry },    
    { path: '/banktransfer', name: 'BankTransfer', component: BankTransfer },
	 { path: '/assignvehicle', name: 'AssignVehicle', component: AssignVehicle },
	 { path: '/ordersreport', name: 'OrdersReport', component: OrdersReport },  
	 { path: '/base/reportorders', name: 'ReportOrders', component: ReportOrders },
	 { path: '/base/basketorders', name: 'BasketOrders', component: BasketOrders },
	 { path: '/base/deliveredreports', name: 'DeliveredReports', component: DeliveredReports },
	 
	{ path: '/selectmembers', name: 'SelectMembers', component: SelectMembers },
	{ path: '/emailssetting', name: 'EmailsSetting', component: EmailsSetting },
	{ path: '/notificationsset', name: 'NotificationsSet', component: NotificationsSet },
	{ path: '/bannersgroup', name: 'BannersGroup', component: BannersGroup },
	{ path: '/addbannergrp', name: 'AddBannersGroup', component: AddBannersGroup },
	{ path: '/addbanners', name: 'AddBanners', component: AddBanners },
    { path: '/base/usersmaster', name: 'UsersMaster', component: UsersMaster },
	{ path: '/shippingstaff', name: 'ShippingStaff', component: ShippingStaff },
    { path: '/base/ordersmanage', name: 'OrdersManage', component: OrdersManage },
	 { path: '/base/outboundorders', name: 'OutboundOrders', component: OutboundOrders },
	  { path: '/base/partiallypicked', name: 'PartiallyPicked', component: PartiallyPicked },  
      { path: '/base/packedorders', name: 'PackedOrders', component: PackedOrders },  	  
	  { path: '/partialpickview', name: 'PartialPickView', component: PartialPickView },
	  { path: '/base/partiallycancelled', name: 'PartiallyCancelled', component: PartiallyCancelled },      
	   { path: '/base/shippingslots', name: 'ShippingSlots', component: ShippingSlots }, 
	    { path: '/base/deliveryslots', name: 'DeliverySlots', component: DeliverySlots }, 
		 { path: '/base/shippmentsetting', name: 'ShippmentSetting', component: ShippmentSetting }, 
		 { path: '/base/hubslist', name: 'HubsList', component: HubsList }, 
		 { path: '/base/hubdetails', name: 'HubDetails', component: HubDetails }, 
		  { path: '/base/shipcustomers', name: 'ShipCustomers', component: ShipCustomers }, 
		   { path: '/base/shippingorders', name: 'ShippingOrders', component: ShippingOrders }, 
		  { path: '/base/transferorders', name: 'TransferOrders', component: TransferOrders }, 
		  { path: '/base/reconcileorders', name: 'ReconcileOrders', component: ReconcileOrders }, 
          { path: '/base/receivablesorders', name: 'ReceivablesOrders', component: ReceivablesOrders }, 		  
		   { path: '/base/receivablesviews', name: 'ReceivablesViews', component: ReceivablesViews },  
		  { path: '/base/ordersoverview', name: 'OrdersOverView', component: OrdersOverView },
		  { path: '/overviewdetails', name: 'OverviewDetails', component: OverviewDetails },  
		   { path: '/base/pendingagent', name: 'PendingAgent', component: PendingAgent },
		  { path: '/pendingoverview', name: 'PendingOverview', component: PendingOverview },  
		   { path: '/base/paidagent', name: 'PaidAgent', component: PaidAgent },   
		   { path: '/paidoverview', name: 'PaidOverview', component: PaidOverview }, 
		   { path: '/bannersmanage', name: 'BannersManage', component: BannersManage },  
		   
		{ path: '/notificationslist', name: 'NotificationsList', component: NotificationsList },  
		{ path: '/rolesprivilege', name: 'RolesPrivilege', component: RolesPrivilege }, 
		{ path: '/addshipzones', name: 'AddShipZones', component: AddShipZones }, 
		
	   { path: '/addshipslot', name: 'AddShipSlot', component: AddShipSlot },  
	   { path: '/adddeliveryslot', name: 'AddDeliverySlot', component: AddDeliverySlot },    
	   
	 { path: '/ordersview', name: 'OrdersView', component: OrdersView },
	  { path: '/processview', name: 'ProcessView', component: ProcessView },
	   { path: '/awaitdispatchview', name: 'AwaitDispatchView', component: AwaitDispatchView },
	    { path: '/pickedupview', name: 'PickedupView', component: PickedupView },
		 { path: '/onrouteview', name: 'OnrouteView', component: OnrouteView },
		 { path: '/deliveredview', name: 'DeliveredView', component: DeliveredView },
		  { path: '/returnedview', name: 'ReturnedView', component: ReturnedView },
		  { path: '/cancelledview', name: 'CancelledView', component: CancelledView },
		   { path: '/outboundview', name: 'OutboundView', component: OutboundView },
	 
	  { path: '/ordercreate', name: 'OrderCreate', component: OrderCreate },
    { path: '/base/confirmorders', name: 'ConfirmOrders', component: ConfirmOrders },
	 { path: '/base/ordersprocess', name: 'OrdersProcess', component: OrdersProcess },
     { path: '/base/awaitingdispatch', name: 'AwaitingDispatch', component: AwaitingDispatch },    
	 { path: '/base/pickedupbydriver', name: 'PickedupbyDriver', component: PickedupbyDriver },
	  { path: '/base/onroute', name: 'OnRoute', component: OnRoute },
	   { path: '/base/ordersdelivered', name: 'OrdersDelivered', component: OrdersDelivered },
	    { path: '/base/ordersreturned', name: 'OrdersReturned', component: OrdersReturned },
		 { path: '/base/orderscancelled', name: 'OrdersCancelled', component: OrdersCancelled },
	   
	 
    { path: '/base/manufacturers', name: 'Manufacturers', component: Manufacturers },
	 { path: '/exhibitorsreg', name: 'ExhibitorsReg', component: ExhibitorsReg },
     { path: '/sponsorsreglist', name: 'SponsorsRegList', component: SponsorsRegList },
     { path: '/sponsorsreg', name: 'SponsorsReg', component: SponsorsReg },
   { path: '/addmanufacturers', name: 'AddManufacturers', component: AddManufacturers },
    { path: '/base/productskit', name: 'ProductsKit', component: ProductsKit },
    { path: '/addpublish', name: 'AddPublish', component: AddPublish },
	{ path: '/addproductskit', name: 'AddProductsKit', component: AddProductsKit },    
	{ path: '/addkititems', name: 'AddKitItems', component: AddKitItems },    
	{ path: '/editkitprice', name: 'EditKitPrice', component: EditKitPrice },  
	{ path: '/storebins', name: 'StoreBins', component: StoreBins }, 
	{ path: '/addstorebins', name: 'AddStoreBins', component: AddStoreBins }, 
    { path: '/base/productskit', name: 'ProductsKit', component: ProductsKit },
	{ path: '/inventory', name: 'Inventory', component: Inventory }, 
	{ path: '/editquantity', name: 'EditQuantity', component: EditQuantity }, 
	{ path: '/editbinquantity', name: 'EditBinQuantity', component: EditBinQuantity }, 
	{ path: '/storestransfer', name: 'StoresTransfer', component: StoresTransfer }, 
	{ path: '/digitalpublish', name: 'DigitalPublish', component: DigitalPublish }, 
	{ path: '/eventspublish', name: 'EventsPublish', component: EventsPublish }, 
	{ path: '/auctionspublish', name: 'AuctionsPublish', component: AuctionsPublish }, 
	{ path: '/base/organizers', name: 'Organizers', component: Organizers },  
    { path: '/base/sponsors', name: 'Sponsors', component: Sponsors }, 	
	 { path: '/addorganizers', name: 'AddOrganizers', component: AddOrganizers },
	  { path: '/addsponsors', name: 'AddSponsors', component: AddSponsors },
	{ path: '/binstransfer', name: 'BinsTransfer', component: BinsTransfer }, 
	{ path: '/sponsorsproposal', name: 'SponsorsProposal', component: SponsorsProposal }, 
	{ path: '/sendproposal', name: 'SendProposal', component: SendProposal }, 
	{ path: '/base/attendees', name: 'Attendees', component: Attendees },     
   { path: '/invitelist', name: 'InviteList', component: InviteList },
   { path: '/sendinvite', name: 'SendInvite', component: SendInvite },      
   { path: '/damagedstock', name: 'DamagedStock', component: DamagedStock }, 
   
    { path: '/remarks', name: 'Remarks', component: Remarks },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/faqscategory', name: 'FaqsCategory', component: FaqsCategory },   
   { path: '/addfaqcategory', name: 'AddFaqsCategory', component: AddFaqsCategory },
   { path: '/faqssetting', name: 'FaqsSetting', component: FaqsSetting },  
    { path: '/storesdetails', name: 'StoresDetails', component: StoresDetails },
	 { path: '/paintingtype', name: 'PaintingType', component: PaintingType },
	  { path: '/addpainttype', name: 'AddPaintType', component: AddPaintType },
	   { path: '/dimensions', name: 'Dimensions', component: Dimensions },   
    { path: '/addvendors', name: 'AddVendors', component: AddVendors },
	 { path: '/vendorsbilling', name: 'VendorsBilling', component: VendorsBilling },  
    { path: '/vendorsbank', name: 'VendorsBank', component: VendorsBank },
	 { path: '/vendorsdetails', name: 'VendorsDetails', component: VendorsDetails },
	  { path: '/addcustomers', name: 'AddCustomers', component: AddCustomers },  
	 { path: '/customeroffice', name: 'CustomerOffice', component: CustomerOffice },  
	{ path: '/customerotheradd', name: 'CustomerOtheradd', component: CustomerOtheradd },
	{ path: '/customerdetails', name: 'CustomerDetails', component: CustomerDetails },
	{ path: '/base/category', name: 'Category', component: Category },
	{ path: '/base/main', name: 'Main', component: Main },  
	{ path: '/addmain', name: 'AddMain', component: AddMain },
	{ path: '/addcategory', name: 'AddCategory', component: AddCategory },  
	{ path: '/base/subcategory', name: 'SubCategory', component: SubCategory },  
	{ path: '/addsubcategory', name: 'AddSubCategory', component: AddSubCategory }, 
    { path: '/base/productgroups', name: 'ProductGroups', component: ProductGroups },  	   
	{ path: '/addproductgroups', name: 'AddProductGroups', component: AddProductGroups }, 
	{ path: '/addproductbrand', name: 'AddProductBrands', component: AddProductBrands }, 
	{ path: '/base/productbrands', name: 'ProductBrands', component: ProductBrands },  	
	{ path: '/base/publish', name: 'Publish', component: Publish }, 
	{ path: '/base/productvariants', name: 'ProductVariants', component: ProductVariants },
	
  { path: '/taxcalculate', name: 'TaxCalculate', component: TaxCalculate },
  { path: '/pricedisplay', name: 'PriceDisplay', component: PriceDisplay },
  { path: '/cartdisplay', name: 'CartDisplay', component: CartDisplay },
  { path: '/invoicedisplay', name: 'InvoiceDisplay', component: InvoiceDisplay },  
   { path: '/currencyformat', name: 'CurrencyFormat', component: CurrencyFormat }, 
   { path: '/billingaddress', name: 'BillingAddress', component: BillingAddress },
    { path: '/addnewformat', name: 'AddNewFormat', component: AddNewFormat },
	 { path: '/phonenumbers', name: 'PhoneNumbers', component: PhoneNumbers },
	 { path: '/files', name: 'Files', component: Files },
	 { path: '/addfiles', name: 'AddFiles', component: AddFiles },  
    { path: '/takebackup', name: 'TakeBackup', component: TakeBackup },
	
  { path: '/adminusers', name: 'Adminusers', component: Adminusers },
  { path: '/employee', name: 'Employees', component: Employees },
  { path: '/empgroups', name: 'Empgroups', component: Empgroups },
  { path: '/addempgroup', name: 'AddEmpGroup', component: AddEmpGroup },
   { path: '/addrolegroup', name: 'AddRoleGroup', component: AddRoleGroup },
   { path: '/addemployee', name: 'AddEmployee', component: AddEmployee },
  { path: '/systemconfig', name: 'SystemConfig', component: SystemConfig },
  { path: '/uomlist', name: 'Uomlist', component: Uomlist },
   { path: '/adduom', name: 'Adduom', component: Adduom },
    { path: '/taxsetting', name: 'TaxSetting', component: TaxSetting },
	 { path: '/addtaxtype', name: 'AddTaxType', component: AddTaxType },
  { path: '/addtax', name: 'AddTax', component: AddTax },
  { path: '/languages', name: 'Languages', component: Languages },
   { path: '/addlanguages', name: 'AddLanguages', component: AddLanguages },
   { path: '/currency', name: 'Currency', component: Currency },
    { path: '/addcurrency', name: 'AddCurrency', component: AddCurrency },
	 { path: '/companyprofile', name: 'CompanyProfile', component: CompanyProfile },
	 { path: '/timezone', name: 'Timezone', component: Timezone },
	 { path: '/addtimezone', name: 'AddTimezone', component: AddTimezone },
	 { path: '/datetime', name: 'DateTime', component: DateTime },
	  { path: '/adddatetime', name: 'AddDatetime', component: AddDatetime },
	 { path: '/locale', name: 'Local', component: Local },
	 { path: '/email', name: 'Email', component: Email },
	  { path: '/smssetting', name: 'SmsSetting', component: SmsSetting }, 
	  { path: '/taxclasses', name: 'TaxClasses', component: TaxClasses },
	    { path: '/googlemap', name: 'GoogleMap', component: GoogleMap }, 
	 { path: '/release', name: 'Release', component: Release },
	 { path: '/messages', name: 'Messages', component: Messages },
	  { path: '/messagetype', name: 'MessageType', component: MessageType },
	  { path: '/addmessage', name: 'AddMessage', component: AddMessage }, 
	  { path: '/socialmedia', name: 'SocialMedia', component: SocialMedia },
	   { path: '/addsocialmedia', name: 'AddSocialmedia', component: AddSocialmedia }, 
	   { path: '/modulesmaster', name: 'ModulesMaster', component: ModulesMaster },
	    { path: '/modules', name: 'Modules', component: Modules },
		{ path: '/addmodule', name: 'AddModule', component: AddModule },
		{ path: '/submodules', name: 'SubModules', component: SubModules },
		{ path: '/addsubmodule', name: 'AddSubModule', component: AddSubModule },
		{ path: '/childsubmodules', name: 'ChildSubModules', component: ChildSubModules },
		{ path: '/addchildsubmodule', name: 'AddChildSubModule', component: AddChildSubModule },  
	   { path: '/modulepages', name: 'ModulePages', component: ModulePages },
	    { path: '/addpages', name: 'AddPages', component: AddPages },
		 { path: '/bankdetails', name: 'BankDetails', component: BankDetails },
		 { path: '/termsconditions', name: 'TermsConditions', component: TermsConditions },  
	     { path: '/privacypolicy', name: 'PrivacyPolicy', component: PrivacyPolicy }, 
		 { path: '/faqs', name: 'Faqs', component: Faqs }, 
		{ path: '/addfaqs', name: 'AddFaqs', component: AddFaqs },
		{ path: '/backuprestore', name: 'BackupRestore', component: BackupRestore },  
		{ path: '/filesmaster', name: 'FilesMaster', component: FilesMaster },
		{ path: '/filespermission', name: 'FilesPermission', component: FilesPermission },  
		{ path: '/filestypes', name: 'FilesTypes', component: FilesTypes }, 
		{ path: '/fileslocation', name: 'FilesLocation', component: FilesLocation }, 
		
		
		{ path: '/filesset', name: 'Filesset', component: Filesset }, 
		{ path: '/addfilesset', name: 'AddFilesset', component: AddFilesset },
		{ path: '/advancedsearch', name: 'AdvancedSearch', component: AdvancedSearch },
		{ path: '/regmasters', name: 'RegMasters', component: RegMasters }, 
		{ path: '/regcategory', name: 'RegCategories', component: RegCategories }, 
		{ path: '/addregcategory', name: 'AddRegCategory', component: AddRegCategory }, 
		{ path: '/regsubcategory', name: 'RegSubCategories', component: RegSubCategories }, 
		{ path: '/addregsubcategory', name: 'AddRegSub', component: AddRegSub },  
		
		
		{ path: '/regsubchild', name: 'RegSubChild', component: RegSubChild }, 
		{ path: '/addregsubchild', name: 'AddRegSubChild', component: AddRegSubChild }, 
		{ path: '/payments', name: 'Payments', component: Payments },  
		{ path: '/addpayments', name: 'AddPayments', component: AddPayments }, 
		{ path: '/sizemaster', name: 'SizeMaster', component: SizeMaster },  
		{ path: '/addsizes', name: 'AddSizes', component: AddSizes }, 
		{ path: '/shapes', name: 'Shapes', component: Shapes }, 
		{ path: '/addshapes', name: 'AddShapes', component: AddShapes },  
		{ path: '/priceranges', name: 'PriceRanges', component: PriceRanges },  
		{ path: '/addranges', name: 'AddRanges', component: AddRanges },
		{ path: '/productpattern', name: 'ProductPattern', component: ProductPattern },  
		{ path: '/addpatterns', name: 'AddPattern', component: AddPattern },   
		{ path: '/producttype', name: 'ProductTypes', component: ProductTypes },  
		{ path: '/addproducttype', name: 'AddProductType', component: AddProductType },  
		{ path: '/productmaterial', name: 'ProductMaterials', component: ProductMaterials },   
		{ path: '/addproductmaterials', name: 'AddProductMaterials', component: AddProductMaterials },  
		{ path: '/framestype', name: 'FramesType', component: FramesType },     
		{ path: '/addframetype', name: 'AddFrameType', component: AddFrameType },  
		{ path: '/productstyle', name: 'ProductStyle', component: ProductStyle },    
		{ path: '/addproductstyle', name: 'AddProductStyle', component: AddProductStyle }, 
		{ path: '/productfinishing', name: 'ProductFinishing', component: ProductFinishing },
         { path: '/addfinishingtype', name: 'AddFinishingType', component: AddFinishingType },    
        { path: '/packingtype', name: 'PackingType', component: PackingType },	   
        { path: '/addpacktype', name: 'AddPackType', component: AddPackType },		   
		{ path: '/zones', name: 'ZonesList', component: ZonesList },  
		{ path: '/countries', name: 'Countries', component: Countries },   
		{ path: '/addcountry', name: 'AddCountry', component: AddCountry },
		{ path: '/states', name: 'States', component: States }, 
		{ path: '/addstate', name: 'AddState', component: AddState }, 
		
		{ path: '/cities', name: 'Cities', component: Cities },
		{ path: '/addcity', name: 'AddCity', component: AddCity },  
		{ path: '/areasmaster', name: 'AreasMaster', component: AreasMaster }, 
		{ path: '/addareas', name: 'AddAreas', component: AddAreas },    
		{ path: '/shippingzones', name: 'ShippingZones', component: ShippingZones },  
		{ path: '/addshippingzone', name: 'AddShippingZone', component: AddShippingZone },
        { path: '/stores', name: 'Stores', component: Stores },		 
		 { path: '/addstore', name: 'AddStore', component: AddStore }, 
         { path: '/fiscalyears', name: 'FiscalYears', component: FiscalYears },		  
		{ path: '/addfiscalyear', name: 'AddFiscalYear', component: AddFiscalYear },  
		{ path: '/carousel', name: 'Carousel', component: Carousel },
        { path: '/frontmenubar', name: 'FrontMenuBar', component: FrontMenuBar },		  
		 { path: '/addmenu', name: 'AddMenu', component: AddMenu },   
		 { path: '/frontsidebar', name: 'FrontSideBar', component: FrontSideBar },    
		{ path: '/addsidemenu', name: 'AddSideMenu', component: AddSideMenu },
		{ path: '/frontfooterbar', name: 'FrontFooterBar', component: FrontFooterBar },
		{ path: '/addfootermenu', name: 'AddFooterMenu', component: AddFooterMenu },   
		{ path: '/paymentwallets', name: 'PaymentWallets', component: PaymentWallets },  
		{ path: '/addwallet', name: 'AddWallet', component: AddWallet },  
		{ path: '/base/vendors', name: 'Vendors', component: Vendors }, 
		{ path: '/base/customers', name: 'Customers', component: Customers },
		
   { path: '/rolegroups', name: 'Rolegroups', component: Rolegroups },
  { path: '/roles', name: 'Roles', component: Roles },
  { path: '/addroles', name: 'AddRoles', component: AddRoles },
  { path: '/rolesetting', name: 'RoleSetting', component: RoleSetting }, 
  { path: '/colours', name: 'Colours', component: Colours },
  
  
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
