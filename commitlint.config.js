module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  prompt: {
    settings: {},
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: "A new feature",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "A bug fix",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          docs: {
            description: "Documentation only changes",
            title: "Documentation",
            emoji: "📚",
          },
          style: {
            description:
              "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
            title: "Styles",
            emoji: "💎",
          },
          refactor: {
            description: "A code change that neither fixes a bug nor adds a feature",
            title: "Code Refactoring",
            emoji: "📦",
          },
          perf: {
            description: "A code change that improves performance",
            title: "Performance Improvements",
            emoji: "🚀",
          },
          test: {
            description: "Adding missing tests or correcting existing tests",
            title: "Tests",
            emoji: "🚨",
          },
          build: {
            description:
              "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
            title: "Builds",
            emoji: "🛠",
          },
          ci: {
            description:
              "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
            title: "Continuous Integrations",
            emoji: "⚙️",
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: "Chores",
            emoji: "♻️",
          },
          revert: {
            description: "Reverts a previous commit",
            title: "Reverts",
            emoji: "🗑",
          },
        },
      },
      scope: {
        description: "What is the scope of this change (e.g. component or file name)",
      },
      subject: {
        description: "Write a short, imperative tense description of the change",
      },
      body: {
        description: "Provide a longer description of the change",
      },
      isBreaking: {
        description: "Are there any breaking changes?",
      },
      breakingBody: {
        description: "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself",
      },
      breaking: {
        description: "Describe the breaking changes",
      },
      isIssueAffected: {
        description: "Does this change affect any open issues?",
      },
      issuesBody: {
        description:
          "If issues are closed, the commit requires a body. Please enter a longer description of the commit itself",
      },
    },
  },
  rules: {
    "type-enum": [
      // type枚举
      2,
      "always",
      [
        "build", // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        "feat", // 新功能
        "fix", // 修补bug
        "docs", // 文档修改
        "style", // 代码格式修改, 注意不是 css 修改
        "refactor", // 重构
        "perf", // 优化相关，比如提升性能、体验
        "test", // 测试用例修改
        "revert", // 代码回滚
        "ci", // 持续集成修改
        "config", // 配置修改
        "chore", // 其他改动
      ],
    ],
    "type-empty": [2, "never"], // never: type不能为空; always: type必须为空
    "type-case": [0, "always", "lower-case"], // type必须小写，upper-case大写，camel-case小驼峰，kebab-case短横线，pascal-case大驼峰，等等
    "scope-empty": [0],
    "scope-case": [0],
    "subject-empty": [2, "never"], // subject不能为空
    "subject-case": [0],
    "subject-full-stop": [0, "never", "."], // subject以.为结束标记
    "header-max-length": [2, "always", 72], // header最长72
    "body-leading-blank": [0], // body换行
    "footer-leading-blank": [0, "always"], // footer以空行开头
  },
};
