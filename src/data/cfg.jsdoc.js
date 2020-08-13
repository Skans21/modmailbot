/**
 * @typedef {object} ModmailConfig
 * @property {string} [token]
 * @property {array} [mainGuildId]
 * @property {string} [mailGuildId]
 * @property {string} [logChannelId]
 * @property {string} [prefix="!"]
 * @property {string} [snippetPrefix="!!"]
 * @property {string} [snippetPrefixAnon="!!!"]
 * @property {string} [status="Message me for help!"]
 * @property {string} [responseMessage="Thank you for your message! Our mod team will reply to you here as soon as possible."]
 * @property {string} [closeMessage]
 * @property {boolean} [allowUserClose=false]
 * @property {string} [newThreadCategoryId]
 * @property {string} [mentionRole="here"]
 * @property {boolean} [pingOnBotMention=true]
 * @property {string} [botMentionResponse]
 * @property {array} [inboxServerPermission=[]]
 * @property {boolean} [alwaysReply=false]
 * @property {boolean} [alwaysReplyAnon=false]
 * @property {boolean} [useNicknames=false]
 * @property {boolean} [ignoreAccidentalThreads=false]
 * @property {boolean} [threadTimestamps=false]
 * @property {boolean} [allowMove=false]
 * @property {boolean} [syncPermissionsOnMove=true]
 * @property {boolean} [typingProxy=false]
 * @property {boolean} [typingProxyReverse=false]
 * @property {boolean} [mentionUserInThreadHeader=false]
 * @property {boolean} [rolesInThreadHeader=false]
 * @property {boolean} [allowStaffEdit=false]
 * @property {boolean} [allowStaffDelete=false]
 * @property {boolean} [enableGreeting=false]
 * @property {string} [greetingMessage]
 * @property {string} [greetingAttachment]
 * @property {*} [guildGreetings={}]
 * @property {number} [requiredAccountAge] Required account age to message Modmail, in hours
 * @property {string} [accountAgeDeniedMessage="Your Discord account is not old enough to contact modmail."]
 * @property {number} [requiredTimeOnServer] Required time on server to message Modmail, in minutes
 * @property {string} [timeOnServerDeniedMessage="You haven't been a member of the server for long enough to contact modmail."]
 * @property {boolean} [relaySmallAttachmentsAsAttachments=false]
 * @property {number} [smallAttachmentLimit=2097152] Max size of attachment to relay directly. Default is 2MB.
 * @property {string} [attachmentStorage="original"]
 * @property {string} [attachmentStorageChannelId]
 * @property {*} [categoryAutomation={}]
 * @property {boolean} [updateNotifications=true]
 * @property {array} [plugins=[]]
 * @property {*} [commandAliases]
 * @property {number} [port=8890]
 * @property {string} [url]
 * @property {array} [extraIntents=[]]
 * @property {*} [dbType="sqlite"]
 * @property {object} [sqliteOptions]
 * @property {string} sqliteOptions.filename
 * @property {object} [mysqlOptions]
 * @property {string} mysqlOptions.host
 * @property {number} mysqlOptions.port
 * @property {string} mysqlOptions.user
 * @property {string} mysqlOptions.password
 * @property {string} mysqlOptions.database
 * @property {string} [mysqlOptions.timezone]
 */
