/**
 * Section defining the addon creator hosting property.
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
 * @export
 * @class TabManifestHost
 */
export class ExtensionHost {
  /**
   * Address where the addon hosting web page is hosted.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#url
   * @type {string}
   * @memberof ExtensionHost
   */
  url?: string;

  /**
   * Base64 string represents the icon to be shown in the addon store
   * and (if applicable) in the Outreach app.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#icon
   * @type {string}
   * @memberof ExtensionHost
   */
  icon: string;
}
