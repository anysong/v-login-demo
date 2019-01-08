module.exports = {
    "globals": {
        "Vue": true
    },
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 5
    },
    "rules": {
        "indent": [], //缩进
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [   //双引号
            "error",
            ""
        ],
        "semi": [     //分号
            "error",
            "always"
        ]
    }
};