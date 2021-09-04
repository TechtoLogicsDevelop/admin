import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
  },
 {
    _tag: 'CSidebarNavItem',
    name: 'Pre-launch Users',
   to: '/prelaunchusers',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users Master',
   to: '/base/usersmaster',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
  },
  
    {
    _tag: 'CSidebarNavItem',
    name: 'Adminusers',
   to: '/adminusers',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
  },
   {
    _tag: 'CSidebarNavItem',
    name: 'System Config',
   to: '/systemconfig',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
	
  },
   {
    _tag: 'CSidebarNavItem',
    name: 'Registration Masters',
   to: '/regmasters',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
	
  },
  
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Ecommerce']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Contacts Master',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Vendors',
        to: '/base/vendors',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Customers Group',
        to: '/base/customersgroup',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Customers',
        to: '/base/customers',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Membership Customers',
        to: '/base/custmembership',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Manufacturers',
        to: '/base/manufacturers',
      },
	  
     
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Purchase Management',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase Order',
        to: '/base/purchaseorder',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Purchase Invoice',
        to: '/base/purchaseinvoice',             
      },
	    {
        _tag: 'CSidebarNavItem',
        name: 'Manage Pay to Vendor',
        to: '/paytovendor',
      },
	  
	   {
        _tag: 'CSidebarNavItem',
        name: 'Debit Note',
        to: '/debitnote',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase Report',
        to: '/base/purchasereport',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',  

    name: 'Product Catalogue',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Price Types',
        to: '/base/pricetypes',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Showcase Types',
        to: '/base/showcasetypes',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Showcase Category',
        to: '/base/showcasecategory',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Main',
        to: '/base/main',
      },
	
      {
        _tag: 'CSidebarNavItem',
        name: 'Category',
        to: '/base/category',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'SubCategory',
        to: '/base/subcategory',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Product Group',
        to: '/base/productgroups',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Product Brands',
        to: '/base/productbrands',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Product Variants',
        to: '/base/productvariants',
      },
	  
	   {
        _tag: 'CSidebarNavItem',
        name: 'Products Kit',
        to: '/base/productskit',
      },
	    {
        _tag: 'CSidebarNavItem',
        name: 'Products Publish',
        to: '/base/publish',
      },
     
    ],
  },
   
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Stores Management',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	
	     {
        _tag: 'CSidebarNavItem',
        name: 'Stores Setting',
        to: '/storesettings',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Stores',
        to: '/stores',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Bins',
        to: '/storebins',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Zones Master',
        to: '/areasmaster',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Inventory',
        to: '/inventory',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Bin to Bin Transfer',
        to: '/binstransfer',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Store to Store Transfer',
        to: '/storestransfer',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Damage Inventory',
        to: '/damagedstock',
      },
     
    ],
  },
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Inventory',
    route: '/base',
    icon: 'cil-puzzle', 
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Stock Availability',  
        to: '/base/stocklist',
      },
     {
        _tag: 'CSidebarNavItem', 
        name: 'GRN', 
        to: '/base/grn',
      },
	 {
        _tag: 'CSidebarNavItem', 

        name: 'Delivery Note', 
        to: '/base/deliverynote',
      },
	   
	    {
        _tag: 'CSidebarNavItem',
        name: 'Inventory Report', 
        to: '/base/inventoryreport',
      },
     
    ],
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sales Management',
    route: '/base',
    icon: 'cil-puzzle', 
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Sales Payment Options',  
        to: '/salespayment',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Sales Quatation',  
        to: '/base/salesquatation',
      },
     {
        _tag: 'CSidebarNavItem', 
        name: 'Sales Order', 
        to: '/base/salesorder',  
      },
	 
	   {
        _tag: 'CSidebarNavItem', 
        name: 'Sales Invoice', 
        to: '/base/salesinvoice',
      },
	  {
        _tag: 'CSidebarNavItem', 
        name: 'Collections', 
        to: '/base/collections',
      },
	     {
        _tag: 'CSidebarNavItem',
        name: 'Credit Note', 
        to: '/base/creditnote',
      },
	    {
        _tag: 'CSidebarNavItem',
        name: 'Sales Report', 
        to: '/base/salesreport',
      },
     
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Bid/ Auctions ',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
	
	{
        _tag: 'CSidebarNavItem',
        name: 'Auction Products',
        to: '/base/auctionproducts',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Auction Activities',
        to: '/auctionactivities',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Bid/Auction History',  
        to: '/auctionshistory',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Bid/Auction Wallet Credit',
        to: '/base/auctioncredits',
      },
     {
        _tag: 'CSidebarNavItem',
        name: 'Bid/Auction Wallet Debit',
        to: '/base/auctiondebits',
      },
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Orders Management',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
	
	{
        _tag: 'CSidebarNavItem',
        name: 'Orders Statuses',
        to: '/base/orderstatuses',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Orders',
        to: '/base/ordersmanage',
      },
     
	  {                                            
        _tag: 'CSidebarNavItem',
        name: 'Outbound Orders',
        to: '/base/outboundorders',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Partially Picked Orders',
        to: '/base/partiallypicked',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Packed Orders',
        to: '/base/packedorders',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Partially Cancelled Orders',
        to: '/base/partiallycancelled',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Abondoned Orders',
        to: '/base/abondonedorders',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Search Orders',
        to: '/base/searchorders',
      },
	    {
        _tag: 'CSidebarNavItem',
        name: 'Return Orders',
        to: '/base/returnedorders',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Refund Orders',
        to: '/base/refundorders',  
      },
	  
     
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',  
    name: 'Events Management',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
	
	{
        _tag: 'CSidebarNavItem',
        name: 'Contribution',
        to: '/base/contribution',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Fund usage Types',
        to: '/base/fundusagetypes',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Events Type',
        to: '/base/eventstypes',
      },
	{
        _tag: 'CSidebarNavItem',
        name: 'Events',
        to: '/base/eventsmaster',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Orgonizers',
        to: '/base/organizers',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: ' Sponsors',
        to: '/base/sponsors',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Attendees',
        to: '/base/attendees',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Invitees',
        to: '/invitelist',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Exhibitors',
        to: '/base/exhibitors',
      },
     
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Shipping  Management',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Orders',
        to: '/base/shippingorders',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Orders-Overview',
        to: '/base/ordersoverview',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Pending Agent Reconcile',
        to: '/base/pendingagent',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Paid Agent Reconcile',
        to: '/base/paidagent',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Shipping Staff',
        to: '/shippingstaff',                  
      },
	 
      {
        _tag: 'CSidebarNavItem',
        name: 'Reports',
        to: '/ordersreport',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Setting',
        to: '/base/shippmentsetting',
      },
     
	{
        _tag: 'CSidebarNavItem',
        name: 'Shipping Slats',
        to: '/base/shippingslots',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Delivery Slats',
        to: '/base/deliveryslots',
      },
	  
     
    ],    
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Tax Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Tax Setting',
        to: '/taxsetting',
      },
	 
      
    ],                     
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Wallet Transaction',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Transaction History',
        to: '/base/wallettransaction',
      },
	 
      
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Offers Details',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Manage Discounts',
        to: '/base/discounts',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Coupon Details',
        to: '/base/coupons',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Voucher Details',
        to: '/base/vouchers',
      },
	{
        _tag: 'CSidebarNavItem',      
        name: 'Manage Offers',
        to: '/base/manageoffers',
      },
	 
      
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Advertising & Promotion',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',  
        name: 'Promotion Types',
        to: '/promotypes',
      },
	{
        _tag: 'CSidebarNavItem',  
        name: 'Manage Promo Code',
        to: '/base/promocode',
      },
	 {
        _tag: 'CSidebarNavItem',  
        name: 'Manage Promotion',
        to: '/base/promotion',
      },
      
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Blog Management',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',  
        name: 'Blogs Group',
        to: '/base/bloggroups',
      },
	 {
        _tag: 'CSidebarNavItem',  
        name: 'Manage Blogs',
        to: '/base/manageblogs',
      },
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Zones / Location',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Zones Setting',
        to: '/zones',
      },
	 
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'LMS',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'LMS Setting',
        to: '/zones',
      },
	 {
        _tag: 'CSidebarNavItem',
        name: 'LMS Courses',
        to: '/managecourse',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'LMS Teachers/ Trainer',
        to: '/managestaff',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'LMS Students',
        to: '/managestudents',
      },
	    {
        _tag: 'CSidebarNavItem',
        name: 'LMS Batches',
        to: '/managebatches',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Time Table',
        to: '/timetableview',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Questions & Tests',
        to: '/questionsandtests',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Examinations',
        to: '/examinations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Study Materials',
        to: '/managenotes',
      },
	 
	  
	  
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',  
    name: 'Opportunities',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Manage Setting',
        to: '/jobssetting',
      },
	 {
        _tag: 'CSidebarNavItem',  
        name: 'Manage Employers ',
        to: '/employers',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Job Position',
        to: '/jobposition',
      },
       {
        _tag: 'CSidebarNavItem',
        name: 'Jobseeker / Candidates',
        to: '/candidates',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Leave Setting',
        to: '/leavesetting',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Leave Managaement',
        to: '/leavesmanage',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Payroll',
        to: '/payroll',
      },
       {
        _tag: 'CSidebarNavItem',
        name: 'Training Setting',
        to: '/trainingsetup',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Performance',
        to: '/performance',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Payment Setting',  
        to: '/jobspayment',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: ' Job Reviews',  
        to: '/jobreviews',
      },
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Files/ Documents Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Files Setting',
        to: '/filesmaster',
      },
	 
      
    ],
	
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Newsletter',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Newsletter Setting',
        to: '/newslettersetup',
      },
	 
      
    ],
	
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Faqs Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Faqs Setting',
        to: '/faqs',
      },
	 
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Modules Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Modules Setting',
        to: '/modulesmaster',
      },
	 
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Enquiries',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Customer Enquiries',
        to: '/enquiries',
      },
	 {
        _tag: 'CSidebarNavItem',
        name: 'Employers Enquiries',
        to: '/employersenquiry',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Candidates Enquiries',
        to: '/candidateenquiry',
      },
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reviews & Ratings',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Manage Reviews & Ratings',
        to: '/reviewrating',
      },
	 
      
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',    
    name: 'Messages Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Messages Setting',
        to: '/messages',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'SMS Setting',
        to: '/smssetting',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Email Setting',
        to: '/emailssetting',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Notifications',
        to: '/notificationsset',
      },
	 
      
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',  
    name: 'Payments Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',  
        name: 'Payment Mode',
        to: '/payments',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Stored Credit Cards',
        to: '/storedcreditcards',
      },
	    {
        _tag: 'CSidebarNavItem',
        name: 'Payment Providers',
        to: '/paymentproviders',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Payment Wallets',
        to: '/paymentwallets',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Payment Setting',
        to: '/paymentsetting',
      },
     
    ],
  },
  
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Banks Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Company Banks',
        to: '/base/companybanks',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Vendor Banks',
        to: '/base/vendorsbanks',    
      },
	 {
        _tag: 'CSidebarNavItem',
        name: 'Bank Account Inquiry',
        to: '/base/bankinquiry',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Bank Transfer',
        to: '/banktransfer',
      },
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Front-End Setting',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Front Menu Bar',
        to: '/frontmenubar',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Front Side Bar',
        to: '/frontsidebar',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Front End FooterBar',
        to: '/frontfooterbar',
      },
      
    ],
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Membership',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Vendors Package',
        to: '/base/vendorspackage',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Membership Package',
        to: '/base/membership',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Manage Vendor Payment',
        to: '/vendorsmembership',
      },
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'UOM Master',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Unit of Measurement',
        to: '/uomlist',
      },
	 
      
    ],
  },
  
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Finance',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Ledger Group',
        to: '/base/ledgergroup',
      },
	   {
        _tag: 'CSidebarNavItem',
        name: 'Ledger Master',
        to: '/base/ledgermaster',
      },
	 {
        _tag: 'CSidebarNavItem',
        name: 'Journal Entries',  
        to: '/base/journalentries',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Finance Reports',
        to: '/base/financereport',
      },
	  {
        _tag: 'CSidebarNavItem',
        name: 'Day Book',
        to: '/base/daybook',
      },
	 
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Custom Banners',
    route: '',
    icon: 'cil-puzzle',
    _children: [
	{
        _tag: 'CSidebarNavItem',
        name: 'Banners ',
        to: '/bannersmanage',
      },
	 
      
    ],
  },
  
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Addtional']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Design Samples',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
     
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
        to: '/base/navs',
      },
	  
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
        to: '/base/switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Disabled',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  
]

export default _nav
