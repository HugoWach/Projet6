const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                  @import "src/Assets/Style/Utils/_variable.scss";
                  @import "src/Assets/Style/Utils/mixin.scss";
                  @import "src/Assets/Style/Utils/font.scss";
                  @import "src/Assets/Style/Utils/keyframe.scss";
                  @import "src/Assets/Style/Utils/placeholder.scss";
                `,
            },
        },
    }
}