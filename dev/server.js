import Esbuild from 'esbuild';
import Server, { error, log } from 'create-serve';

export const isWatch = process.argv.includes('-w');

/**
 * Customization esbuild-serve package
 * @param [options] - esbuild options, see more esbuild docs
 * @param [serveOptions] - create-serve options
 * * @param {number} [serveOptions.port]
 * * @param {string} [serveOptions.root]
 * * @param {boolean} [serveOptions.live]
 * @returns {Promise<void>}
 */
export const EsbuildServer = async (options = {}, serveOptions = {}) => {
  Esbuild.build({
      ...options,
      watch: isWatch && {
        onRebuild(err) {
          Server.update();
          err ? error('💣 Oooops....Failed 🤯') : log('🔥 Hot Reload 🔥');
        }
      }
    })
    .catch(() => process.exit(1));

  if (isWatch) {
    Server.start(serveOptions);
  }
};

