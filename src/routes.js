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
const ChangePassword = React.lazy(() => import('./views/base/changepassword/ChangePassword'));    
const Profile = React.lazy(() => import('./views/base/profile/Profile'));    
const AbondonedOrders = React.lazy(() => import('./views/base/abondonedorders/AbondonedOrders'));  
const SearchOrders = React.lazy(() => import('./views/base/searchorders/SearchOrders'));
const ReturnedOrders = React.lazy(() => import('./views/base/returnedorders/ReturnedOrders'));    
const RefundOrders = React.lazy(() => import('./views/base/refundorders/RefundOrders'));
const WalletTransaction = React.lazy(() => import('./views/base/wallettransaction/WalletTransaction'));  
const PromoCode = React.lazy(() => import('./views/base/promocode/PromoCode'));    
const Promotion = React.lazy(() => import('./views/base/promotion/Promotion'));       
const CreatePromoCode = React.lazy(() => import('./views/createpromocode/CreatePromoCode'));  
const CreatePromotion = React.lazy(() => import('./views/createpromotion/CreatePromotion'));  
const PaymentSetting = React.lazy(() => import('./views/paymentsetting/PaymentSetting'));  
const Enquiries = React.lazy(() => import('./views/enquiries/Enquiries'));  
const ReviewRating = React.lazy(() => import('./views/reviewrating/ReviewRating'));    
const PromotionTypes = React.lazy(() => import('./views/promotypes/PromotionTypes'));  
const AddPromotionTypes = React.lazy(() => import('./views/addpromotypes/AddPromotionTypes'));  
const PaytoVendor = React.lazy(() => import('./views/paytovendor/PaytoVendor'));      
const VendorsMembership = React.lazy(() => import('./views/vendorsmembership/VendorsMembership')); 
const VendorsPackage = React.lazy(() => import('./views/base/vendorspackage/VendorsPackage'));   
const AddVendorsPackage = React.lazy(() => import('./views/addvendorspackage/AddVendorsPackage'));    
const Membership = React.lazy(() => import('./views/base/membership/Membership'));  
const BlogsGroups = React.lazy(() => import('./views/base/bloggroups/BlogsGroups'));    
const AddBlogGroup = React.lazy(() => import('./views/addbloggroup/AddBlogGroup'));   
const ManageBlogs = React.lazy(() => import('./views/base/manageblogs/ManageBlogs'));    
const CreateBlogs = React.lazy(() => import('./views/createblogs/CreateBlogs'));    
const ManageOffers = React.lazy(() => import('./views/base/manageoffers/ManageOffers'));    
const Discounts = React.lazy(() => import('./views/base/discounts/Discounts'));             
const AddDiscount = React.lazy(() => import('./views/adddiscount/AddDiscount'));    
const CreateNewOffer = React.lazy(() => import('./views/createnewoffer/CreateNewOffer'));   
const Coupons = React.lazy(() => import('./views/base/coupons/Coupons'));   
const Vouchers = React.lazy(() => import('./views/base/vouchers/Vouchers'));    
const JobsSetting = React.lazy(() => import('./views/jobssetting/JobsSetting'));       
const JobTypes = React.lazy(() => import('./views/jobtypes/JobTypes'));             
const AddJobtype = React.lazy(() => import('./views/addjobtype/AddJobtype'));  
const JobListings = React.lazy(() => import('./views/joblistings/JobListings'));  
const AddJobList = React.lazy(() => import('./views/addjoblist/AddJobList'));    
const CoursesList = React.lazy(() => import('./views/courseslist/CoursesList'));   
const AddCourse = React.lazy(() => import('./views/addcourse/AddCourse')); 
const PurchaseOrder = React.lazy(() => import('./views/base/purchaseorder/PurchaseOrder')); 
const PurchaseOrderGenerate = React.lazy(() => import('./views/pogenrate/PurchaseOrderGenerate'));   
const SelectProducts = React.lazy(() => import('./views/selectproducts/SelectProducts'));    
const PurchaseInvoice = React.lazy(() => import('./views/base/purchaseinvoice/PurchaseInvoice'));      
const VendorsPay = React.lazy(() => import('./views/vendorspay/VendorsPay'));  
const DebitNote = React.lazy(() => import('./views/debitnote/DebitNote'));  
const AddDebitNote = React.lazy(() => import('./views/adddebitnote/AddDebitNote'));    
const PurchaseReport = React.lazy(() => import('./views/base/purchasereport/PurchaseReport'));  
const StockList = React.lazy(() => import('./views/base/stocklist/StockList'));  
const GRN = React.lazy(() => import('./views/base/grn/GRN'));  
const GenerateGrn = React.lazy(() => import('./views/base/generategrn/GenerateGrn'));  
const DeliveryNote = React.lazy(() => import('./views/base/deliverynote/DeliveryNote'));        
const InventoryReport = React.lazy(() => import('./views/base/inventoryreport/InventoryReport'));  
const CustomersGroup = React.lazy(() => import('./views/base/customersgroup/CustomersGroup'));    
const AddCustomerGroup = React.lazy(() => import('./views/addcustgroup/AddCustomerGroup'));  
const CustomersMembership = React.lazy(() => import('./views/base/custmembership/CustomersMembership'));  
const SalesQuatation = React.lazy(() => import('./views/base/salesquatation/SalesQuatation'));  
const CreateQuatation = React.lazy(() => import('./views/createquatation/CreateQuatation'));  
const SalesOrder = React.lazy(() => import('./views/base/salesorder/SalesOrder'));   
const CreateSalesOrder = React.lazy(() => import('./views/createsalesorder/CreateSalesOrder'));         
const SalesInvoice = React.lazy(() => import('./views/base/salesinvoice/SalesInvoice'));   
const Collections = React.lazy(() => import('./views/base/collections/Collections'));           
const CollectionsEntry = React.lazy(() => import('./views/collectionsentry/CollectionsEntry'));  
const CreditNote = React.lazy(() => import('./views/base/creditnote/CreditNote'));     
const CreateCreditNote = React.lazy(() => import('./views/createcreditnote/CreateCreditNote'));  
const SalesReport = React.lazy(() => import('./views/base/salesreport/SalesReport'));    
const DayBook = React.lazy(() => import('./views/base/daybook/DayBook'));  
const LedgerGroup = React.lazy(() => import('./views/base/ledgergroup/LedgerGroup'));  
const CreateLedgerGroup = React.lazy(() => import('./views/createledgergroup/CreateLedgerGroup'));      
const LedgerMaster = React.lazy(() => import('./views/base/ledgermaster/LedgerMaster'));        
const CreateLedger = React.lazy(() => import('./views/createledger/CreateLedger'));   
const JournalEntries = React.lazy(() => import('./views/base/journalentries/JournalEntries'));          
const AddJournalEntry = React.lazy(() => import('./views/addjournalentry/AddJournalEntry')); 
const FinanceReport = React.lazy(() => import('./views/base/financereport/FinanceReport'));   
const StoreSettings = React.lazy(() => import('./views/storesettings/StoreSettings'));    
const WebsiteSettings = React.lazy(() => import('./views/websitesettings/WebsiteSettings'));  
const StoreStatus = React.lazy(() => import('./views/storestatus/StoreStatus'));  
const PhysicalSetup = React.lazy(() => import('./views/physicalsetup/PhysicalSetup'));  
const SEOptimize = React.lazy(() => import('./views/seoptimize/SEOptimize'));    
const DisplaySettings = React.lazy(() => import('./views/displaysettings/DisplaySettings'));  
const DisplaySetup = React.lazy(() => import('./views/displaysetup/DisplaySetup'));  
const CategorySetup = React.lazy(() => import('./views/categorysetup/CategorySetup'));  
const ProductsSetup = React.lazy(() => import('./views/productssetup/ProductsSetup'));    
const ImagesSettings = React.lazy(() => import('./views/imagessettings/ImagesSettings'));  
const ImagesSetup = React.lazy(() => import('./views/imagessetup/ImagesSetup'));  
const BrandGroupSetup = React.lazy(() => import('./views/brandgroupsetup/BrandGroupSetup'));    
const ShareSetting = React.lazy(() => import('./views/sharesetting/ShareSetting'));  
const DateandTime = React.lazy(() => import('./views/dateandtime/DateandTime'));  
const Miscellaneous = React.lazy(() => import('./views/miscellaneous/Miscellaneous'));    
const DocSetup = React.lazy(() => import('./views/docsetup/DocSetup'));  
const GoogleSetup = React.lazy(() => import('./views/googlesetup/GoogleSetup'));  
const AdvancedStoreSetup = React.lazy(() => import('./views/advsetup/AdvancedStoreSetup'));  
const EmailSetup = React.lazy(() => import('./views/emailsetup/EmailSetup'));    
const SecurePrivacy = React.lazy(() => import('./views/secureprivacy/SecurePrivacy'));  
const OrderStatuses = React.lazy(() => import('./views/base/orderstatuses/OrderStatuses')); 
const AddNewStatus = React.lazy(() => import('./views/addnewstatus/AddNewStatus'));     
const StatusNotification = React.lazy(() => import('./views/statusnotification/StatusNotification'));  
const JobAlerts = React.lazy(() => import('./views/jobalerts/JobAlerts'));  
const Employers = React.lazy(() => import('./views/employers/Employers'));    
const AddEmployer = React.lazy(() => import('./views/addemployer/AddEmployer'));  
const JobTitles = React.lazy(() => import('./views/jobtitles/JobTitles'));  
const AddJobtitle = React.lazy(() => import('./views/addjobtitle/AddJobtitle'));  
const PayGrade = React.lazy(() => import('./views/paygrade/PayGrade'));    
const AddPayGrade = React.lazy(() => import('./views/addpaygrade/AddPayGrade'));    
const JobSkills = React.lazy(() => import('./views/jobskills/JobSkills'));    
const AddJobSkills = React.lazy(() => import('./views/addjobskills/AddJobSkills'));   
const Education = React.lazy(() => import('./views/education/Education'));     
const AddEducation = React.lazy(() => import('./views/addeducation/AddEducation'));    
const Certifications = React.lazy(() => import('./views/certifications/Certifications'));    
const AddCertifications = React.lazy(() => import('./views/addcertifications/AddCertifications'));      
const TrainingSession = React.lazy(() => import('./views/trainsession/TrainingSession'));  
const AddSession = React.lazy(() => import('./views/addsession/AddSession')); 
const JobPosition = React.lazy(() => import('./views/jobposition/JobPosition'));  
const AddJobPosition = React.lazy(() => import('./views/addjobposition/AddJobPosition'));    
const ExperienceLevel = React.lazy(() => import('./views/experiencelevel/ExperienceLevel'));  
const AddExperienceLevel = React.lazy(() => import('./views/addexplevel/AddExperienceLevel'));  
const Benefits = React.lazy(() => import('./views/benefits/Benefits'));  
const AddBenefits = React.lazy(() => import('./views/addbenefits/AddBenefits'));  
const Candidates = React.lazy(() => import('./views/candidates/Candidates'));  
const AddCandidate = React.lazy(() => import('./views/addcandidate/AddCandidate'));  
const CandidateProfile = React.lazy(() => import('./views/candidateprofile/CandidateProfile'));  
const LeaveSetting = React.lazy(() => import('./views/leavesetting/LeaveSetting'));      
const LeaveTypes = React.lazy(() => import('./views/leavetypes/LeaveTypes'));    
const AddLeaveType = React.lazy(() => import('./views/addleavetype/AddLeaveType'));  
const LeavePeriod = React.lazy(() => import('./views/leaveperiod/LeavePeriod'));    
const AddLeavePeriod = React.lazy(() => import('./views/addleaveperiod/AddLeavePeriod'));   
const WorkWeek = React.lazy(() => import('./views/workweek/WorkWeek'));  
const Holidays = React.lazy(() => import('./views/holidays/Holidays'));  
const AddHoliday = React.lazy(() => import('./views/addholiday/AddHoliday')); 
const LeaveRule = React.lazy(() => import('./views/leaverule/LeaveRule'));    
const AddLeaveRule = React.lazy(() => import('./views/addleaverule/AddLeaveRule'));    
const PaidTimeoff = React.lazy(() => import('./views/paidtimeoff/PaidTimeoff'));    
const AddPaidTimeoff = React.lazy(() => import('./views/addpaidtimeoff/AddPaidTimeoff'));     
const LeaveGroup = React.lazy(() => import('./views/leavegroup/LeaveGroup'));    
const AddLeaveGroup = React.lazy(() => import('./views/addleavegroup/AddLeaveGroup'));  
const LeaveGroupEmployee = React.lazy(() => import('./views/leavegroupemp/LeaveGroupEmployee'));      
const AddLeaveGroupEmp = React.lazy(() => import('./views/addleavegroupemp/AddLeaveGroupEmp'));  
const EmployeeLeaveList = React.lazy(() => import('./views/employeeleavelist/EmployeeLeaveList'));  
const Payroll = React.lazy(() => import('./views/payroll/Payroll'));  
const ComponentType = React.lazy(() => import('./views/componenttype/ComponentType')); 
const AddComponentType = React.lazy(() => import('./views/addcomptype/AddComponentType'));   
const SalaryComponents = React.lazy(() => import('./views/salarycomponents/SalaryComponents'));  
const AddSalaryComponent = React.lazy(() => import('./views/addsalarycomponent/AddSalaryComponent'));  
const EmployeeComponents = React.lazy(() => import('./views/employeecomponents/EmployeeComponents'));    
const AddEmployeeComponent = React.lazy(() => import('./views/addempcomponent/AddEmployeeComponent'));     
const TrainingSetup = React.lazy(() => import('./views/trainingsetup/TrainingSetup'));   
const TrainingCourses = React.lazy(() => import('./views/trainingcourses/TrainingCourses')); 
const AddTrainingCourse = React.lazy(() => import('./views/addtrainingcourse/AddTrainingCourse'));    
const StaffTrainingCourses = React.lazy(() => import('./views/stafftrainingcourses/StaffTrainingCourses')); 
const AddStaffTraining = React.lazy(() => import('./views/addstafftraining/AddStaffTraining'));  
const MyTrainingCourses = React.lazy(() => import('./views/mycourses/MyTrainingCourses'));  
const AllTrainingCourses = React.lazy(() => import('./views/alltrainingcourses/AllTrainingCourses'));  
const DirectReports = React.lazy(() => import('./views/directreports/DirectReports'));  
const CoordinatedbyMe = React.lazy(() => import('./views/coordinatedbyme/CoordinatedbyMe')); 
const Performance = React.lazy(() => import('./views/performance/Performance'));  
const SelfAssesments = React.lazy(() => import('./views/selfassesments/SelfAssesments'));    
const PerformanceReviews = React.lazy(() => import('./views/performancereviews/PerformanceReviews'));  
const ProvideFeedback = React.lazy(() => import('./views/providefeedback/ProvideFeedback'));  
const JobsPayment = React.lazy(() => import('./views/jobspayment/JobsPayment'));  
const InvoiceSetup = React.lazy(() => import('./views/invoicesetup/InvoiceSetup'));   
const InvoiceList = React.lazy(() => import('./views/invoicelist/InvoiceList'));   
const JobCoupons = React.lazy(() => import('./views/jobcoupons/JobCoupons'));  
const AddJobCoupon = React.lazy(() => import('./views/addjobcoupon/AddJobCoupon'));  
const DirectPayments = React.lazy(() => import('./views/directpayments/DirectPayments'));  
const CreditPayments = React.lazy(() => import('./views/creditpayments/CreditPayments'));  
const Subscriptions = React.lazy(() => import('./views/subscriptions/Subscriptions'));  
const AddSubscriptions = React.lazy(() => import('./views/addsubscriptions/AddSubscriptions'));   
const JobPackages = React.lazy(() => import('./views/jobpackages/JobPackages'));  
const AddEmpPackage = React.lazy(() => import('./views/addemppackage/AddEmpPackage'));  
const PaymentArchive = React.lazy(() => import('./views/paymentarchive/PaymentArchive'));  
const ApprovePayment = React.lazy(() => import('./views/approvepayment/ApprovePayment'));  
const NewsletterSetup = React.lazy(() => import('./views/newslettersetup/NewsletterSetup'));   
const Newsletter = React.lazy(() => import('./views/newsletter/Newsletter'));   
const AddNewsletter = React.lazy(() => import('./views/addnewsletter/AddNewsletter'));  
const SendNewsletter = React.lazy(() => import('./views/sendnewsletter/SendNewsletter'));    
const NewsletterLog = React.lazy(() => import('./views/newsletterlog/NewsletterLog'));  
const JobReviews = React.lazy(() => import('./views/jobreviews/JobReviews'));  
const CompanyReviews = React.lazy(() => import('./views/companyreviews/CompanyReviews'));  
const CandidateReviews = React.lazy(() => import('./views/candidatereviews/CandidateReviews')); 
const EmployersEnquiry = React.lazy(() => import('./views/employersenquiry/EmployersEnquiry'));  
const CandidateEnquiry = React.lazy(() => import('./views/candidateenquiry/CandidateEnquiry'));  
const LeavesManage = React.lazy(() => import('./views/leavesmanage/LeavesManage'));  
const MyLeaves = React.lazy(() => import('./views/myleaves/MyLeaves'));    
const ApplyLeave = React.lazy(() => import('./views/applyleave/ApplyLeave'));    
const Entitlement = React.lazy(() => import('./views/entitlement/Entitlement'));    
const ApprovedLeave = React.lazy(() => import('./views/approvedleave/ApprovedLeave'));    
const PendingLeave = React.lazy(() => import('./views/pendingleave/PendingLeave'));  
const LmsCourses = React.lazy(() => import('./views/lmscourses/LmsCourses'));  
const CreateCourse = React.lazy(() => import('./views/createcourse/CreateCourse'));  
const ManageCourses = React.lazy(() => import('./views/managecourse/ManageCourses'));  
const LmsSubjects = React.lazy(() => import('./views/lmssubjects/LmsSubjects'));  
const CreateSubject = React.lazy(() => import('./views/createsubject/CreateSubject'));  
const LmsTopics = React.lazy(() => import('./views/lmstopics/LmsTopics'));  
const CreateTopics = React.lazy(() => import('./views/createtopics/CreateTopics'));   
const ManageStaff = React.lazy(() => import('./views/managestaff/ManageStaff'));    
const ManageStudents = React.lazy(() => import('./views/managestudents/ManageStudents'));   
const ManageBatches = React.lazy(() => import('./views/managebatches/ManageBatches'));
const TimetableView = React.lazy(() => import('./views/timetableview/TimetableView'));  
const AddTimetable = React.lazy(() => import('./views/addtimetable/AddTimetable'));    
const QuestionsandTests = React.lazy(() => import('./views/questionsandtests/QuestionsandTests'));   
const Questions = React.lazy(() => import('./views/questions/Questions'));    
const SearchQuestions = React.lazy(() => import('./views/searchquestions/SearchQuestions'));   
const ManageTests = React.lazy(() => import('./views/managetests/ManageTests')); 
const SearchTests = React.lazy(() => import('./views/searchtests/SearchTests'));    
const TestResults = React.lazy(() => import('./views/testresults/TestResults'));  
const ShowcaseTypes = React.lazy(() => import('./views/base/showcasetypes/ShowcaseTypes'));   
const ShowcaseCategory = React.lazy(() => import('./views/base/showcasecategory/ShowcaseCategory'));  
const EventsTypes = React.lazy(() => import('./views/base/eventstypes/EventsTypes')); 
const PriceTypes = React.lazy(() => import('./views/base/pricetypes/PriceTypes'));  
const Contribution = React.lazy(() => import('./views/base/contribution/Contribution')); 
const FundUsageTypes = React.lazy(() => import('./views/base/fundusagetypes/FundUsageTypes'));    
const AuctionActivities = React.lazy(() => import('./views/auctionactivities/AuctionActivities'));  
const AuctionsHistory = React.lazy(() => import('./views/auctionshistory/AuctionsHistory'));  
const AuctionProducts = React.lazy(() => import('./views/base/auctionproducts/AuctionProducts'));  
const AuctionCredits = React.lazy(() => import('./views/base/auctioncredits/AuctionCredits'));    
const AuctionDebits = React.lazy(() => import('./views/base/auctiondebits/AuctionDebits'));  
const RegistrationOptions = React.lazy(() => import('./views/registrationoptions/RegistrationOptions'));  
const Maintenance = React.lazy(() => import('./views/maintenance/Maintenance'));  
const Preferences = React.lazy(() => import('./views/preferences/Preferences'));   
const EmailTemplates = React.lazy(() => import('./views/emailtemplates/EmailTemplates')); 
const SalesPayment = React.lazy(() => import('./views/salespayment/SalesPayment'));  
const StoredCreditCards = React.lazy(() => import('./views/storedcreditcards/StoredCreditCards'));    
const PaymentProviders = React.lazy(() => import('./views/paymentproviders/PaymentProviders')); 
const SiteDisplay = React.lazy(() => import('./views/sitedisplay/SiteDisplay'));  
const ListingsPreferences = React.lazy(() => import('./views/listingspreferences/ListingsPreferences')); 
const ListingsAuction = React.lazy(() => import('./views/listingsauction/ListingsAuction'));  
const ListingsFixedPrice = React.lazy(() => import('./views/listingsfixedprice/ListingsFixedPrice'));  
const ListingsClassified = React.lazy(() => import('./views/listingsclassified/ListingsClassified'));  
const ProfileSettings = React.lazy(() => import('./views/profilesettings/ProfileSettings'));  
const MyProfileSettings = React.lazy(() => import('./views/myprofilesettings/MyProfileSettings')); 
const SettingsPrivacy = React.lazy(() => import('./views/settingsprivacy/SettingsPrivacy'));  
const SettingsNotifications = React.lazy(() => import('./views/settingsnotifications/SettingsNotifications'));    
const SettingsLanguages = React.lazy(() => import('./views/settingslanguages/SettingsLanguages'));  
const SettingsSync = React.lazy(() => import('./views/settingssync/SettingsSync'));  
const SettingsMyProfile = React.lazy(() => import('./views/settingsmyprofile/SettingsMyProfile'));  
const ProfileVerification = React.lazy(() => import('./views/profileverification/ProfileVerification')); 
const ProfileActivity = React.lazy(() => import('./views/profileactivity/ProfileActivity'));  
const ProfileAccount = React.lazy(() => import('./views/profileaccount/ProfileAccount'));  
const ProfileSubscription = React.lazy(() => import('./views/profilesubscription/ProfileSubscription')); 
const UsersProfile = React.lazy(() => import('./views/usersprofile/UsersProfile')); 
const PublicProfile = React.lazy(() => import('./views/publicprofile/PublicProfile'));  
const ProfileLinkedAccounts = React.lazy(() => import('./views/profilelinkedaccounts/ProfileLinkedAccounts'));   
const ProfileAbout = React.lazy(() => import('./views/profileabout/ProfileAbout'));  
const ProfileServices = React.lazy(() => import('./views/profileservices/ProfileServices')); 
const ProfileDisciplines = React.lazy(() => import('./views/profiledisciplines/ProfileDisciplines'));  
const FeaturePress = React.lazy(() => import('./views/featurepress/FeaturePress'));    
const ReviewsRecommendations = React.lazy(() => import('./views/reviewsrecommendations/ReviewsRecommendations'));  
const ProfileEducation = React.lazy(() => import('./views/profileeducation/ProfileEducation'));  
const WorkExperience = React.lazy(() => import('./views/workexperience/WorkExperience'));  
const ProfileCertificate = React.lazy(() => import('./views/profilecertificate/ProfileCertificate'));   
const Accomplishments = React.lazy(() => import('./views/accomplishments/Accomplishments'));   
const ProfileMyEvents = React.lazy(() => import('./views/profilemyevents/ProfileMyEvents'));   
const BusinessProfile = React.lazy(() => import('./views/businessprofile/BusinessProfile'));  
const BusinessTeam = React.lazy(() => import('./views/businessteam/BusinessTeam')); 
const BusinessArtist = React.lazy(() => import('./views/businessartist/BusinessArtist'));  
const BusinessArtisans = React.lazy(() => import('./views/businessartisans/BusinessArtisans'));  
const WorksAvailableby = React.lazy(() => import('./views/worksavailableby/WorksAvailableby'));   
const BusinessWebLinks = React.lazy(() => import('./views/businessweblinks/BusinessWebLinks'));   
const BusinessLinked = React.lazy(() => import('./views/businesslinked/BusinessLinked')); 
const BusinessAbout = React.lazy(() => import('./views/businessabout/BusinessAbout'));  
const Specialities = React.lazy(() => import('./views/specialities/Specialities')); 
const BusinessDisciplines = React.lazy(() => import('./views/businessdisciplines/BusinessDisciplines')); 
const Bfeaturepress = React.lazy(() => import('./views/bfeaturepress/Bfeaturepress'));  
const BusinessReviews = React.lazy(() => import('./views/businessreviews/BusinessReviews'));  
const BusinessAccomplish = React.lazy(() => import('./views/businessaccomplish/BusinessAccomplish'));  
const ProfileEvents = React.lazy(() => import('./views/profileevents/ProfileEvents')); 
const BusinessEvents = React.lazy(() => import('./views/businessevents/BusinessEvents'));  
const MyShopView = React.lazy(() => import('./views/myshopview/MyShopView'));  
const InstitutionProfile = React.lazy(() => import('./views/institutionprofile/InstitutionProfile')); 
const StudentsList = React.lazy(() => import('./views/studentslist/StudentsList'));   
const AlumnisList = React.lazy(() => import('./views/alumnislist/AlumnisList')); 
const FacultyList = React.lazy(() => import('./views/facultylist/FacultyList'));   
const InstituteSubjects = React.lazy(() => import('./views/institutesubjects/InstituteSubjects'));   
const Certified = React.lazy(() => import('./views/certified/Certified'));   
const InstitutionLinked = React.lazy(() => import('./views/institutionlinked/InstitutionLinked'));  
const InstitutionWebLinks = React.lazy(() => import('./views/institutionweblinks/InstitutionWebLinks'));  
const InstitutionAbout = React.lazy(() => import('./views/institutionabout/InstitutionAbout'));   
const InstSpecialities = React.lazy(() => import('./views/instspecialities/InstSpecialities'));   
const InstDisciplines = React.lazy(() => import('./views/instdisciplines/InstDisciplines'));   
const InstFeaturePress = React.lazy(() => import('./views/instfeaturepress/InstFeaturePress'));  
const InstitutionReviews = React.lazy(() => import('./views/institutionreviews/InstitutionReviews'));   
const InstAccomplish = React.lazy(() => import('./views/instaccomplish/InstAccomplish'));  
const InstitutionEvents = React.lazy(() => import('./views/institutionevents/InstitutionEvents'));   
const OnlineResult = React.lazy(() => import('./views/onlineresult/OnlineResult'));   
const Examinations = React.lazy(() => import('./views/examinations/Examinations')); 
const ManageExams = React.lazy(() => import('./views/manageexams/ManageExams'));   
const QuestionPapers = React.lazy(() => import('./views/questionpapers/QuestionPapers'));  
const PapersList = React.lazy(() => import('./views/paperslist/PapersList')); 
const ManageMarks = React.lazy(() => import('./views/managemarks/ManageMarks'));  
const MarksList = React.lazy(() => import('./views/markslist/MarksList'));   
const ManageNotes = React.lazy(() => import('./views/managenotes/ManageNotes'));  
const NotesList = React.lazy(() => import('./views/noteslist/NotesList'));   
const PrelaunchUsers = React.lazy(() => import('./views/prelaunchusers/PrelaunchUsers'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  
  { path: '/prelaunchusers', name: 'PrelaunchUsers', component: PrelaunchUsers },
   { path: '/noteslist', name: 'NotesList', component: NotesList },
  { path: '/managenotes', name: 'ManageNotes', component: ManageNotes },
   { path: '/markslist', name: 'MarksList', component: MarksList },
   { path: '/managemarks', name: 'ManageMarks', component: ManageMarks },
  { path: '/paperslist', name: 'PapersList', component: PapersList },
  { path: '/questionpapers', name: 'QuestionPapers', component: QuestionPapers },
  { path: '/manageexams', name: 'ManageExams', component: ManageExams },
   { path: '/examinations', name: 'Examinations', component: Examinations },
  { path: '/onlineresult', name: 'OnlineResult', component: OnlineResult },
  { path: '/institutionevents', name: 'InstitutionEvents', component: InstitutionEvents },
   { path: '/instaccomplish', name: 'InstAccomplish', component: InstAccomplish },
  { path: '/institutionreviews', name: 'InstitutionReviews', component: InstitutionReviews },
   { path: '/instfeaturepress', name: 'InstFeaturePress', component: InstFeaturePress },
   { path: '/instdisciplines', name: 'InstDisciplines', component: InstDisciplines },
  { path: '/instspecialities', name: 'InstSpecialities', component: InstSpecialities },
   { path: '/institutionabout', name: 'InstitutionAbout', component: InstitutionAbout },
  { path: '/institutionweblinks', name: 'InstitutionWebLinks', component: InstitutionWebLinks },
  { path: '/institutionlinked', name: 'InstitutionLinked', component: InstitutionLinked },
  { path: '/certified', name: 'Certified', component: Certified },
    { path: '/institutesubjects', name: 'InstituteSubjects', component: InstituteSubjects },
    { path: '/facultylist', name: 'FacultyList', component: FacultyList },
   { path: '/alumnislist', name: 'AlumnisList', component: AlumnisList },
   { path: '/studentslist', name: 'StudentsList', component: StudentsList },
  { path: '/institutionprofile', name: 'InstitutionProfile', component: InstitutionProfile },
  { path: '/myshopview', name: 'MyShopView', component: MyShopView },
  { path: '/businessevents', name: 'BusinessEvents', component: BusinessEvents },
  { path: '/profileevents', name: 'ProfileEvents', component: ProfileEvents },
  { path: '/businessaccomplish', name: 'BusinessAccomplish', component: BusinessAccomplish },
  { path: '/businessreviews', name: 'BusinessReviews', component: BusinessReviews },
  { path: '/bfeaturepress', name: 'Bfeaturepress', component: Bfeaturepress },
  { path: '/businessdisciplines', name: 'BusinessDisciplines', component: BusinessDisciplines },
  { path: '/specialities', name: 'Specialities', component: Specialities },
  { path: '/businessabout', name: 'BusinessAbout', component: BusinessAbout },
  { path: '/businesslinked', name: 'BusinessLinked', component: BusinessLinked },
  { path: '/businessweblinks', name: 'BusinessWebLinks', component: BusinessWebLinks },
   { path: '/worksavailableby', name: 'WorksAvailableby', component: WorksAvailableby },
  { path: '/businessartisans', name: 'BusinessArtisans', component: BusinessArtisans },
  { path: '/businessartist', name: 'BusinessArtist', component: BusinessArtist },
  { path: '/businessteam', name: 'BusinessTeam', component: BusinessTeam },
   { path: '/businessprofile', name: 'BusinessProfile', component: BusinessProfile },
   { path: '/profilemyevents', name: 'ProfileMyEvents', component: ProfileMyEvents },
  { path: '/accomplishments', name: 'Accomplishments', component: Accomplishments },
  { path: '/profilecertificate', name: 'ProfileCertificate', component: ProfileCertificate },
  { path: '/workexperience', name: 'WorkExperience', component: WorkExperience },
  { path: '/profileeducation', name: 'ProfileEducation', component: ProfileEducation },
   { path: '/reviewsrecommendations', name: 'ReviewsRecommendations', component: ReviewsRecommendations },
  { path: '/featurepress', name: 'FeaturePress', component: FeaturePress },
  { path: '/profiledisciplines', name: 'ProfileDisciplines', component: ProfileDisciplines },
   { path: '/profileservices', name: 'ProfileServices', component: ProfileServices },
   { path: '/profileabout', name: 'ProfileAbout', component: ProfileAbout },
  { path: '/profilelinkedaccounts', name: 'ProfileLinkedAccounts', component: ProfileLinkedAccounts },
  { path: '/publicprofile', name: 'PublicProfile', component: PublicProfile },
  { path: '/usersprofile', name: 'UsersProfile', component: UsersProfile },
   { path: '/profilesubscription', name: 'ProfileSubscription', component: ProfileSubscription },
   { path: '/profileaccount', name: 'ProfileAccount', component: ProfileAccount },
  { path: '/profileactivity', name: 'ProfileActivity', component: ProfileActivity },
  { path: '/profileverification', name: 'ProfileVerification', component: ProfileVerification },
   { path: '/settingsmyprofile', name: 'SettingsMyProfile', component: SettingsMyProfile },
    { path: '/settingssync', name: 'SettingsSync', component: SettingsSync },
   { path: '/settingslanguages', name: 'SettingsLanguages', component: SettingsLanguages },
  { path: '/settingsnotifications', name: 'SettingsNotifications', component: SettingsNotifications },
   { path: '/settingsprivacy', name: 'SettingsPrivacy', component: SettingsPrivacy },
  { path: '/myprofilesettings', name: 'MyProfileSettings', component: MyProfileSettings },
  { path: '/profilesettings', name: 'ProfileSettings', component: ProfileSettings },
   { path: '/listingsclassified', name: 'ListingsClassified', component: ListingsClassified },
  { path: '/listingsfixedprice', name: 'ListingsFixedPrice', component: ListingsFixedPrice },
   { path: '/listingsauction', name: 'ListingsAuction', component: ListingsAuction },
  { path: '/sitedisplay', name: 'SiteDisplay', component: SiteDisplay },
   { path: '/paymentproviders', name: 'PaymentProviders', component: PaymentProviders },
   { path: '/storedcreditcards', name: 'StoredCreditCards', component: StoredCreditCards },
  { path: '/salespayment', name: 'SalesPayment', component: SalesPayment },
   { path: '/emailtemplates', name: 'EmailTemplates', component: EmailTemplates },
  { path: '/preferences', name: 'Preferences', component: Preferences },
   { path: '/maintenance', name: 'Maintenance', component: Maintenance },
  { path: '/registrationoptions', name: 'RegistrationOptions', component: RegistrationOptions },
   { path: '/base/auctiondebits', name: 'AuctionDebits', component: AuctionDebits },
   { path: '/base/auctioncredits', name: 'AuctionCredits', component: AuctionCredits },
   { path: '/base/auctionproducts', name: 'AuctionProducts', component: AuctionProducts },
  { path: '/auctionactivities', name: 'AuctionActivities', component: AuctionActivities },
  { path: '/auctionshistory', name: 'AuctionsHistory', component: AuctionsHistory },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/fundusagetypes', name: 'FundUsageTypes', component: FundUsageTypes },
   { path: '/base/contribution', name: 'Contribution', component: Contribution },
   { path: '/base/pricetypes', name: 'PriceTypes', component: PriceTypes },
   { path: '/base/eventstypes', name: 'EventsTypes', component: EventsTypes },
   { path: '/base/showcasecategory', name: 'ShowcaseCategory', component: ShowcaseCategory },
   { path: '/base/showcasetypes', name: 'ShowcaseTypes', component: ShowcaseTypes },
   { path: '/testresults', name: 'TestResults', component: TestResults },
  { path: '/searchtests', name: 'SearchTests', component: SearchTests },
  { path: '/managetests', name: 'ManageTests', component: ManageTests },
   { path: '/searchquestions', name: 'SearchQuestions', component: SearchQuestions },
   { path: '/questionsandtests', name: 'QuestionsandTests', component: QuestionsandTests },
   { path: '/timetableview', name: 'TimetableView', component: TimetableView },
   { path: '/questions', name: 'Questions', component: Questions },
    { path: '/addtimetable', name: 'AddTimetable', component: AddTimetable },
  { path: '/managebatches', name: 'ManageBatches', component: ManageBatches },
   { path: '/managestudents', name: 'ManageStudents', component: ManageStudents },
  { path: '/managestaff', name: 'ManageStaff', component: ManageStaff },
   { path: '/createtopics', name: 'CreateTopics', component: CreateTopics },
  { path: '/lmstopics', name: 'LmsTopics', component: LmsTopics },
  { path: '/createsubject', name: 'CreateSubject', component: CreateSubject },
   { path: '/lmssubjects', name: 'LmsSubjects', component: LmsSubjects },
  { path: '/managecourse', name: 'ManageCourses', component: ManageCourses },
   { path: '/createcourse', name: 'CreateCourse', component: CreateCourse },
  { path: '/lmscourses', name: 'LmsCourses', component: LmsCourses },
   { path: '/approvedleave', name: 'ApprovedLeave', component: ApprovedLeave },
  { path: '/approvedleave', name: 'ApprovedLeave', component: ApprovedLeave },
  { path: '/entitlement', name: 'Entitlement', component: Entitlement },
   { path: '/applyleave', name: 'ApplyLeave', component: ApplyLeave },
   { path: '/myleaves', name: 'MyLeaves', component: MyLeaves },
  
  { path: '/leavesmanage', name: 'LeavesManage', component: LeavesManage },
  { path: '/candidateenquiry', name: 'CandidateEnquiry', component: CandidateEnquiry },
   { path: '/employersenquiry', name: 'EmployersEnquiry', component: EmployersEnquiry },
   { path: '/candidatereviews', name: 'CandidateReviews', component: CandidateReviews },
   { path: '/companyreviews', name: 'CompanyReviews', component: CompanyReviews },
  { path: '/jobreviews', name: 'JobReviews', component: JobReviews },
  { path: '/newsletterlog', name: 'NewsletterLog', component: NewsletterLog },
  { path: '/sendnewsletter', name: 'SendNewsletter', component: SendNewsletter },
  
   { path: '/addnewsletter', name: 'AddNewsletter', component: AddNewsletter },
   { path: '/newsletter', name: 'Newsletter', component: Newsletter },
   { path: '/newslettersetup', name: 'NewsletterSetup', component: NewsletterSetup },
  { path: '/approvepayment', name: 'ApprovePayment', component: ApprovePayment },
   { path: '/paymentarchive', name: 'PaymentArchive', component: PaymentArchive },
  { path: '/addemppackage', name: 'AddEmpPackage', component: AddEmpPackage },
  { path: '/jobpackages', name: 'JobPackages', component: JobPackages },
   { path: '/addsubscriptions', name: 'AddSubscriptions', component: AddSubscriptions },
  { path: '/subscriptions', name: 'Subscriptions', component: Subscriptions },
   { path: '/creditpayments', name: 'CreditPayments', component: CreditPayments },
  { path: '/directpayments', name: 'DirectPayments', component: DirectPayments },
   { path: '/addjobcoupon', name: 'AddJobCoupon', component: AddJobCoupon },
   { path: '/jobcoupons', name: 'JobCoupons', component: JobCoupons },
  { path: '/invoicelist', name: 'InvoiceList', component: InvoiceList },
  { path: '/invoicesetup', name: 'InvoiceSetup', component: InvoiceSetup },
  { path: '/jobspayment', name: 'JobsPayment', component: JobsPayment },
  
  { path: '/providefeedback', name: 'ProvideFeedback', component: ProvideFeedback },
  { path: '/performancereviews', name: 'PerformanceReviews', component: PerformanceReviews },
   { path: '/selfassesments', name: 'SelfAssesments', component: SelfAssesments },
   { path: '/performance', name: 'Performance', component: Performance },
   { path: '/coordinatedbyme', name: 'CoordinatedbyMe', component: CoordinatedbyMe },
  { path: '/directreports', name: 'DirectReports', component: DirectReports },
  { path: '/alltrainingcourses', name: 'AllTrainingCourses', component: AllTrainingCourses },
  { path: '/mycourses', name: 'MyTrainingCourses', component: MyTrainingCourses },
  { path: '/addstafftraining', name: 'AddStaffTraining', component: AddStaffTraining },
  { path: '/stafftrainingcourses', name: 'StaffTrainingCourses', component: StaffTrainingCourses },
  { path: '/addtrainingcourse', name: 'AddTrainingCourse', component: AddTrainingCourse },
   { path: '/trainingcourses', name: 'TrainingCourses', component: TrainingCourses },
   { path: '/trainingsetup', name: 'TrainingSetup', component: TrainingSetup },
  
   { path: '/addempcomponent', name: 'AddEmployeeComponent', component: AddEmployeeComponent },
  { path: '/employeecomponents', name: 'EmployeeComponents', component: EmployeeComponents },
   { path: '/addsalarycomponent', name: 'AddSalaryComponent', component: AddSalaryComponent },
  { path: '/salarycomponents', name: 'SalaryComponents', component: SalaryComponents },
   { path: '/addcomptype', name: 'AddComponentType', component: AddComponentType },
  { path: '/componenttype', name: 'ComponentType', component: ComponentType },
  { path: '/payroll', name: 'Payroll', component: Payroll },
  { path: '/employeeleavelist', name: 'EmployeeLeaveList', component: EmployeeLeaveList },
  { path: '/addleavegroupemp', name: 'AddLeaveGroupEmp', component: AddLeaveGroupEmp },
    { path: '/leavegroupemp', name: 'LeaveGroupEmployee', component: LeaveGroupEmployee },
     { path: '/addleavegroup', name: 'AddLeaveGroup', component: AddLeaveGroup },
   { path: '/leavegroup', name: 'LeaveGroup', component: LeaveGroup },
  { path: '/addpaidtimeoff', name: 'AddPaidTimeoff', component: AddPaidTimeoff },
      { path: '/paidtimeoff', name: 'PaidTimeoff', component: PaidTimeoff },
  { path: '/addleaverule', name: 'AddLeaveRule', component: AddLeaveRule },
  { path: '/leaverule', name: 'LeaveRule', component: LeaveRule },
  { path: '/addholiday', name: 'AddHoliday', component: AddHoliday },
  { path: '/holidays', name: 'Holidays', component: Holidays },
  { path: '/workweek', name: 'WorkWeek', component: WorkWeek },
  { path: '/addleaveperiod', name: 'AddLeavePeriod', component: AddLeavePeriod },
  { path: '/leaveperiod', name: 'LeavePeriod', component: LeavePeriod },
  { path: '/addleavetype', name: 'AddLeaveType', component: AddLeaveType },
   { path: '/leavetypes', name: 'LeaveTypes', component: LeaveTypes },
   { path: '/leavesetting', name: 'LeaveSetting', component: LeaveSetting },
  { path: '/candidateprofile', name: 'CandidateProfile', component: CandidateProfile },
   { path: '/addcandidate', name: 'AddCandidate', component: AddCandidate },
   { path: '/candidates', name: 'Candidates', component: Candidates },
  { path: '/addbenefits', name: 'AddBenefits', component: AddBenefits },
  { path: '/benefits', name: 'Benefits', component: Benefits },
   { path: '/addexplevel', name: 'AddExperienceLevel', component: AddExperienceLevel },
   { path: '/experiencelevel', name: 'ExperienceLevel', component: ExperienceLevel },
   { path: '/addjobposition', name: 'AddJobPosition', component: AddJobPosition },
   { path: '/jobposition', name: 'JobPosition', component: JobPosition },
     { path: '/addsession', name: 'AddSession', component: AddSession },
  { path: '/trainsession', name: 'TrainingSession', component: TrainingSession },
  { path: '/addcertifications', name: 'AddCertifications', component: AddCertifications },
  { path: '/certifications', name: 'Certifications', component: Certifications },
  { path: '/addeducation', name: 'AddEducation', component: AddEducation },
   { path: '/education', name: 'Education', component: Education },
  { path: '/addjobskills', name: 'AddJobSkills', component: AddJobSkills },
  { path: '/addpaygrade', name: 'AddPayGrade', component: AddPayGrade },
  { path: '/jobskills', name: 'JobSkills', component: JobSkills },
  { path: '/paygrade', name: 'PayGrade', component: PayGrade },
  { path: '/addjobtitle', name: 'AddJobtitle', component: AddJobtitle },
  { path: '/jobtitles', name: 'JobTitles', component: JobTitles },
   { path: '/addemployer', name: 'AddEmployer', component: AddEmployer },
  { path: '/employers', name: 'Employers', component: Employers },
   { path: '/jobalerts', name: 'JobAlerts', component: JobAlerts },
  { path: '/statusnotification', name: 'StatusNotification', component: StatusNotification },
  { path: '/addnewstatus', name: 'AddNewStatus', component: AddNewStatus },
  { path: '/base/orderstatuses', name: 'OrderStatuses', component: OrderStatuses },
  { path: '/secureprivacy', name: 'SecurePrivacy', component: SecurePrivacy },
   { path: '/emailsetup', name: 'EmailSetup', component: EmailSetup },
   { path: '/advsetup', name: 'AdvancedStoreSetup', component: AdvancedStoreSetup },
  { path: '/googlesetup', name: 'GoogleSetup', component: GoogleSetup },
  { path: '/docsetup', name: 'DocSetup', component: DocSetup },
  { path: '/miscellaneous', name: 'Miscellaneous', component: Miscellaneous },
  { path: '/dateandtime', name: 'DateandTime', component: DateandTime },
  { path: '/sharesetting', name: 'ShareSetting', component: ShareSetting },
   { path: '/brandgroupsetup', name: 'BrandGroupSetup', component: BrandGroupSetup },
   { path: '/imagessetup', name: 'ImagesSetup', component: ImagesSetup },
  { path: '/imagessettings', name: 'ImagesSettings', component: ImagesSettings },
  { path: '/productssetup', name: 'ProductsSetup', component: ProductsSetup },
  { path: '/categorysetup', name: 'CategorySetup', component: CategorySetup },
    { path: '/displaysetup', name: 'DisplaySetup', component: DisplaySetup },
   { path: '/displaysettings', name: 'DisplaySettings', component: DisplaySettings },
   { path: '/seoptimize', name: 'SEOptimize', component: SEOptimize },
   { path: '/physicalsetup', name: 'PhysicalSetup', component: PhysicalSetup },
  { path: '/storestatus', name: 'StoreStatus', component: StoreStatus },
   { path: '/websitesettings', name: 'WebsiteSettings', component: WebsiteSettings },
   { path: '/storesettings', name: 'StoreSettings', component: StoreSettings },
   { path: '/base/financereport', name: 'FinanceReport', component: FinanceReport },
  { path: '/addjournalentry', name: 'AddJournalEntry', component: AddJournalEntry },
  { path: '/base/journalentries', name: 'JournalEntries', component: JournalEntries },
  { path: '/createledger', name: 'CreateLedger', component: CreateLedger },
   { path: '/base/ledgermaster', name: 'LedgerMaster', component: LedgerMaster },
  { path: '/createledgergroup', name: 'CreateLedgerGroup', component: CreateLedgerGroup },
    { path: '/base/ledgergroup', name: 'LedgerGroup', component: LedgerGroup },
  
  {  path: '/base/daybook', name: 'DayBook', component: DayBook },
  { path: '/base/salesreport', name: 'SalesReport', component: SalesReport },
   { path: '/createcreditnote', name: 'CreateCreditNote', component: CreateCreditNote },
  { path: '/base/creditnote', name: 'CreditNote', component: CreditNote },
   { path: '/collectionsentry', name: 'CollectionsEntry', component: CollectionsEntry },
   { path: '/base/collections', name: 'Collections', component: Collections },
  { path: '/base/salesinvoice', name: 'SalesInvoice', component: SalesInvoice },
  { path: '/createquatation', name: 'CreateQuatation', component: CreateQuatation },
   { path: '/base/salesorder', name: 'SalesOrder', component: SalesOrder },
  { path: '/createsalesorder', name: 'CreateSalesOrder', component: CreateSalesOrder },
  
  { path: '/base/salesquatation', name: 'SalesQuatation', component: SalesQuatation },
   { path: '/base/custmembership', name: 'CustomersMembership', component: CustomersMembership },
  { path: '/addcustgroup', name: 'AddCustomerGroup', component: AddCustomerGroup },
   { path: '/base/customersgroup', name: 'CustomersGroup', component: CustomersGroup },
   { path: '/base/inventoryreport', name: 'InventoryReport', component: InventoryReport },
   { path: '/base/deliverynote', name: 'DeliveryNote', component: DeliveryNote },
  { path: '/base/purchaseorder', name: 'PurchaseOrder', component: PurchaseOrder },  
  { path: '/pogenrate', name: 'PurchaseOrderGenerate', component: PurchaseOrderGenerate },
  { path: '/selectproducts', name: 'SelectProducts', component: SelectProducts },
  { path: '/base/purchaseinvoice', name: 'PurchaseInvoice', component: PurchaseInvoice }, 
   { path: '/vendorspay', name: 'VendorsPay', component: VendorsPay },
    { path: '/debitnote', name: 'DebitNote', component: DebitNote },
	{ path: '/adddebitnote', name: 'AddDebitNote', component: AddDebitNote },
	{ path: '/base/purchasereport', name: 'PurchaseReport', component: PurchaseReport },
	{ path: '/base/stocklist', name: 'StockList', component: StockList },
    { path: '/base/grn', name: 'GRN', component: GRN },
	{ path: '/base/generategrn', name: 'GenerateGrn', component: GenerateGrn },
	 { path: '/base/eventsmaster', name: 'EventsMaster', component: EventsMaster }, 
   { path: '/base/exhibitors', name: 'Exhibitors', component: Exhibitors },
   { path: '/base/membership', name: 'Membership', component: Membership },
    { path: '/base/bloggroups', name: 'BlogsGroups', component: BlogsGroups },
    { path: '/addbloggroup', name: 'AddBlogGroup', component: AddBlogGroup },
	{ path: '/base/manageblogs', name: 'ManageBlogs', component: ManageBlogs },
	 { path: '/createblogs', name: 'CreateBlogs', component: CreateBlogs },
	 { path: '/base/manageoffers', name: 'ManageOffers', component: ManageOffers },
	 { path: '/base/discounts', name: 'Discounts', component: Discounts },
	 { path: '/adddiscount', name: 'AddDiscount', component: AddDiscount },
	 { path: '/createnewoffer', name: 'CreateNewOffer', component: CreateNewOffer },
	  { path: '/base/coupons', name: 'Coupons', component: Coupons },
	  { path: '/base/vouchers', name: 'Vouchers', component: Vouchers },
	   { path: '/jobssetting', name: 'JobsSetting', component: JobsSetting },
	   { path: '/jobtypes', name: 'JobTypes', component: JobTypes }, 
	    { path: '/addjobtype', name: 'AddJobtype', component: AddJobtype }, 
		{ path: '/joblistings', name: 'JobListings', component: JobListings }, 
		{ path: '/addjoblist', name: 'AddJobList', component: AddJobList }, 
		{ path: '/courseslist', name: 'CoursesList', component: CoursesList },  
		{ path: '/addcourse', name: 'AddCourse', component: AddCourse },
		  
    { path: '/base/companybanks', name: 'CompanyBanks', component: CompanyBanks },
	 { path: '/base/vendorsbanks', name: 'VendorsBanks', component: VendorsBanks },
	  { path: '/base/bankinquiry', name: 'BankInquiry', component: BankInquiry },    
    { path: '/banktransfer', name: 'BankTransfer', component: BankTransfer },
	 { path: '/assignvehicle', name: 'AssignVehicle', component: AssignVehicle },
	 { path: '/ordersreport', name: 'OrdersReport', component: OrdersReport },  
	 { path: '/base/reportorders', name: 'ReportOrders', component: ReportOrders },
	 { path: '/base/basketorders', name: 'BasketOrders', component: BasketOrders },
	 { path: '/base/deliveredreports', name: 'DeliveredReports', component: DeliveredReports }, 
	  { path: '/base/profile', name: 'Profile', component: Profile },
	   { path: '/base/abondonedorders', name: 'AbondonedOrders', component: AbondonedOrders },
	    { path: '/base/searchorders', name: 'SearchOrders', component: SearchOrders }, 
         { path: '/base/returnedorders', name: 'ReturnedOrders', component: ReturnedOrders }, 	
      { path: '/base/refundorders', name: 'RefundOrders', component: RefundOrders }, 
      { path: '/base/wallettransaction', name: 'WalletTransaction', component: WalletTransaction }, 
       { path: '/base/promocode', name: 'PromoCode', component: PromoCode },	
        { path: '/base/promotion', name: 'Promotion', component: Promotion },	
         { path: '/createpromocode', name: 'CreatePromoCode', component: CreatePromoCode },	
        { path: '/createpromotion', name: 'CreatePromotion', component: CreatePromotion },	
       { path: '/paymentsetting', name: 'PaymentSetting', component: PaymentSetting },	
        { path: '/enquiries', name: 'Enquiries', component: Enquiries },
         { path: '/reviewrating', name: 'ReviewRating', component: ReviewRating },		
		  { path: '/promotypes', name: 'PromotionTypes', component: PromotionTypes },	    
	   { path: '/addpromotypes', name: 'AddPromotionTypes', component: AddPromotionTypes },
	   { path: '/paytovendor', name: 'PaytoVendor', component: PaytoVendor }, 
       { path: '/vendorsmembership', name: 'VendorsMembership', component: VendorsMembership }, 	     
	  { path: '/base/vendorspackage', name: 'VendorsPackage', component: VendorsPackage },
	   { path: '/addvendorspackage', name: 'AddVendorsPackage', component: AddVendorsPackage },
	  
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
	    { path: '/base/changepassword', name: 'ChangePassword', component: ChangePassword },
	 
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
