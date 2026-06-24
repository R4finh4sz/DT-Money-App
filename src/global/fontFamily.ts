export const fontFamily = {
  roboto_condensed_light: 'RobotoCondensed_300Light',
  roboto_condensed_regular: 'RobotoCondensed_400Regular',
  roboto_condensed_medium: 'RobotoCondensed_500Medium',
  roboto_condensed_semibold: 'RobotoCondensed_600SemiBold',
  roboto_condensed_bold: 'RobotoCondensed_700Bold',

  roboto_condensed_light_italic: 'RobotoCondensed_300Light_Italic',
  roboto_condensed_regular_italic: 'RobotoCondensed_400Regular_Italic',
  roboto_condensed_medium_italic: 'RobotoCondensed_500Medium_Italic',
  roboto_condensed_semibold_italic: 'RobotoCondensed_600SemiBold_Italic',
  roboto_condensed_bold_italic: 'RobotoCondensed_700Bold_Italic',
} as const;

export type FontT = (typeof fontFamily)[keyof typeof fontFamily];
