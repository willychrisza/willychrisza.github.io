/* eslint-disable no-unused-vars */
/**
 * A descriptor of a named company used to categorize prospects within an account-based sales approach.
 *
 * @see https://api.outreach.io/api/v2/docs#account
 * @export
 * @enum {number}
 */
export enum AccountContextKeys {
  /**
   * Account id
   */
  ID = 'acc.id',

  /**
   * A custom ID for the account, often referencing an ID in an external system.
   */
  CUSTOM_ID = 'acc.cstmId',

  /**
   * A custom description of the account.
   */
  DESCRIPTION = 'acc.desc',

  /**
   * Account company name
   */
  DOMAIN = 'acc.dmn',

  /**
   * External provider id
   */
  EXTERNAL_ID = 'acc.extid',

  /**
   * External provider name
   */
  EXTERNAL_PROVIDER = 'acc.extprvd',

  /**
   * The company’s primary geographic region (e.g. "Eastern USA").
   */
  LOCALITY = 'acc.loc',

  /**
   * The name of the company (e.g. "Acme Corporation").
   */
  NAME = 'acc.name',

  /**
   * A list of tag values associated with the account (e.g. ["Enterprise", "Tier 1"]).
   */
  TAGS = 'acc.tags',

  /**
   *The account's external information received from the installed plugins (Salesforce, Dynamics etc.)
   @deprecated Usage of this key is deprecated. Please use EXTERNAL_ID or EXTERNAL_NAME.
   */
  EXTERNAL = 'acc.ext',

  CUSTOM_FIELD_1 = 'acc.csf1',
  CUSTOM_FIELD_2 = 'acc.csf2',
  CUSTOM_FIELD_3 = 'acc.csf3',
  CUSTOM_FIELD_4 = 'acc.csf4',
  CUSTOM_FIELD_5 = 'acc.csf5',
  CUSTOM_FIELD_6 = 'acc.csf6',
  CUSTOM_FIELD_7 = 'acc.csf7',
  CUSTOM_FIELD_8 = 'acc.csf8',
  CUSTOM_FIELD_9 = 'acc.csf9',

  CUSTOM_FIELD_10 = 'acc.csf10',
  CUSTOM_FIELD_11 = 'acc.csf11',
  CUSTOM_FIELD_12 = 'acc.csf12',
  CUSTOM_FIELD_13 = 'acc.csf13',
  CUSTOM_FIELD_14 = 'acc.csf14',
  CUSTOM_FIELD_15 = 'acc.csf15',
  CUSTOM_FIELD_16 = 'acc.csf16',
  CUSTOM_FIELD_17 = 'acc.csf17',
  CUSTOM_FIELD_18 = 'acc.csf18',
  CUSTOM_FIELD_19 = 'acc.csf19',

  CUSTOM_FIELD_20 = 'acc.csf20',
  CUSTOM_FIELD_21 = 'acc.csf21',
  CUSTOM_FIELD_22 = 'acc.csf22',
  CUSTOM_FIELD_23 = 'acc.csf23',
  CUSTOM_FIELD_24 = 'acc.csf24',
  CUSTOM_FIELD_25 = 'acc.csf25',
  CUSTOM_FIELD_26 = 'acc.csf26',
  CUSTOM_FIELD_27 = 'acc.csf27',
  CUSTOM_FIELD_28 = 'acc.csf28',
  CUSTOM_FIELD_29 = 'acc.csf29',

  CUSTOM_FIELD_30 = 'acc.csf30',
  CUSTOM_FIELD_31 = 'acc.csf31',
  CUSTOM_FIELD_32 = 'acc.csf32',
  CUSTOM_FIELD_33 = 'acc.csf33',
  CUSTOM_FIELD_34 = 'acc.csf34',
  CUSTOM_FIELD_35 = 'acc.csf35',
  CUSTOM_FIELD_36 = 'acc.csf36',
  CUSTOM_FIELD_37 = 'acc.csf37',
  CUSTOM_FIELD_38 = 'acc.csf38',
  CUSTOM_FIELD_39 = 'acc.csf39',

  CUSTOM_FIELD_40 = 'acc.csf40',
  CUSTOM_FIELD_41 = 'acc.csf41',
  CUSTOM_FIELD_42 = 'acc.csf42',
  CUSTOM_FIELD_43 = 'acc.csf43',
  CUSTOM_FIELD_44 = 'acc.csf44',
  CUSTOM_FIELD_45 = 'acc.csf45',
  CUSTOM_FIELD_46 = 'acc.csf46',
  CUSTOM_FIELD_47 = 'acc.csf47',
  CUSTOM_FIELD_48 = 'acc.csf48',
  CUSTOM_FIELD_49 = 'acc.csf49',

  CUSTOM_FIELD_50 = 'acc.csf50',
  CUSTOM_FIELD_51 = 'acc.csf51',
  CUSTOM_FIELD_52 = 'acc.csf52',
  CUSTOM_FIELD_53 = 'acc.csf53',
  CUSTOM_FIELD_54 = 'acc.csf54',
  CUSTOM_FIELD_55 = 'acc.csf55',
  CUSTOM_FIELD_56 = 'acc.csf56',
  CUSTOM_FIELD_57 = 'acc.csf57',
  CUSTOM_FIELD_58 = 'acc.csf58',
  CUSTOM_FIELD_59 = 'acc.csf59',

  CUSTOM_FIELD_60 = 'acc.csf60',
  CUSTOM_FIELD_61 = 'acc.csf61',
  CUSTOM_FIELD_62 = 'acc.csf62',
  CUSTOM_FIELD_63 = 'acc.csf63',
  CUSTOM_FIELD_64 = 'acc.csf64',
  CUSTOM_FIELD_65 = 'acc.csf65',
  CUSTOM_FIELD_66 = 'acc.csf66',
  CUSTOM_FIELD_67 = 'acc.csf67',
  CUSTOM_FIELD_68 = 'acc.csf68',
  CUSTOM_FIELD_69 = 'acc.csf69',

  CUSTOM_FIELD_70 = 'acc.csf70',
  CUSTOM_FIELD_71 = 'acc.csf71',
  CUSTOM_FIELD_72 = 'acc.csf72',
  CUSTOM_FIELD_73 = 'acc.csf73',
  CUSTOM_FIELD_74 = 'acc.csf74',
  CUSTOM_FIELD_75 = 'acc.csf75',
  CUSTOM_FIELD_76 = 'acc.csf76',
  CUSTOM_FIELD_77 = 'acc.csf77',
  CUSTOM_FIELD_78 = 'acc.csf78',
  CUSTOM_FIELD_79 = 'acc.csf79',

  CUSTOM_FIELD_80 = 'acc.csf80',
  CUSTOM_FIELD_81 = 'acc.csf81',
  CUSTOM_FIELD_82 = 'acc.csf82',
  CUSTOM_FIELD_83 = 'acc.csf83',
  CUSTOM_FIELD_84 = 'acc.csf84',
  CUSTOM_FIELD_85 = 'acc.csf85',
  CUSTOM_FIELD_86 = 'acc.csf86',
  CUSTOM_FIELD_87 = 'acc.csf87',
  CUSTOM_FIELD_88 = 'acc.csf88',
  CUSTOM_FIELD_89 = 'acc.csf89',

  CUSTOM_FIELD_90 = 'acc.csf90',
  CUSTOM_FIELD_91 = 'acc.csf91',
  CUSTOM_FIELD_92 = 'acc.csf92',
  CUSTOM_FIELD_93 = 'acc.csf93',
  CUSTOM_FIELD_94 = 'acc.csf94',
  CUSTOM_FIELD_95 = 'acc.csf95',
  CUSTOM_FIELD_96 = 'acc.csf96',
  CUSTOM_FIELD_97 = 'acc.csf97',
  CUSTOM_FIELD_98 = 'acc.csf98',
  CUSTOM_FIELD_99 = 'acc.csf99',

  CUSTOM_FIELD_100 = 'acc.csf100',
  CUSTOM_FIELD_101 = 'acc.csf101',
  CUSTOM_FIELD_102 = 'acc.csf102',
  CUSTOM_FIELD_103 = 'acc.csf103',
  CUSTOM_FIELD_104 = 'acc.csf104',
  CUSTOM_FIELD_105 = 'acc.csf105',
  CUSTOM_FIELD_106 = 'acc.csf106',
  CUSTOM_FIELD_107 = 'acc.csf107',
  CUSTOM_FIELD_108 = 'acc.csf108',
  CUSTOM_FIELD_109 = 'acc.csf109',

  CUSTOM_FIELD_110 = 'acc.csf110',
  CUSTOM_FIELD_111 = 'acc.csf111',
  CUSTOM_FIELD_112 = 'acc.csf112',
  CUSTOM_FIELD_113 = 'acc.csf113',
  CUSTOM_FIELD_114 = 'acc.csf114',
  CUSTOM_FIELD_115 = 'acc.csf115',
  CUSTOM_FIELD_116 = 'acc.csf116',
  CUSTOM_FIELD_117 = 'acc.csf117',
  CUSTOM_FIELD_118 = 'acc.csf118',
  CUSTOM_FIELD_119 = 'acc.csf119',

  CUSTOM_FIELD_120 = 'acc.csf120',
  CUSTOM_FIELD_121 = 'acc.csf121',
  CUSTOM_FIELD_122 = 'acc.csf122',
  CUSTOM_FIELD_123 = 'acc.csf123',
  CUSTOM_FIELD_124 = 'acc.csf124',
  CUSTOM_FIELD_125 = 'acc.csf125',
  CUSTOM_FIELD_126 = 'acc.csf126',
  CUSTOM_FIELD_127 = 'acc.csf127',
  CUSTOM_FIELD_128 = 'acc.csf128',
  CUSTOM_FIELD_129 = 'acc.csf129',

  CUSTOM_FIELD_130 = 'acc.csf130',
  CUSTOM_FIELD_131 = 'acc.csf131',
  CUSTOM_FIELD_132 = 'acc.csf132',
  CUSTOM_FIELD_133 = 'acc.csf133',
  CUSTOM_FIELD_134 = 'acc.csf134',
  CUSTOM_FIELD_135 = 'acc.csf135',
  CUSTOM_FIELD_136 = 'acc.csf136',
  CUSTOM_FIELD_137 = 'acc.csf137',
  CUSTOM_FIELD_138 = 'acc.csf138',
  CUSTOM_FIELD_139 = 'acc.csf139',

  CUSTOM_FIELD_140 = 'acc.csf140',
  CUSTOM_FIELD_141 = 'acc.csf141',
  CUSTOM_FIELD_142 = 'acc.csf142',
  CUSTOM_FIELD_143 = 'acc.csf143',
  CUSTOM_FIELD_144 = 'acc.csf144',
  CUSTOM_FIELD_145 = 'acc.csf145',
  CUSTOM_FIELD_146 = 'acc.csf146',
  CUSTOM_FIELD_147 = 'acc.csf147',
  CUSTOM_FIELD_148 = 'acc.csf148',
  CUSTOM_FIELD_149 = 'acc.csf149',

  CUSTOM_FIELD_150 = 'acc.csf150',
}
