/* 
    包结构
        包实际上就是一个压缩文件，解压以后还原为目录，符合规范的目录，应该包含如下文件
            package.json 描述文件(必须)
            bin 可执行二进制文件
            lib js代码
            doc 文档
            test 单元测试

        包描述文件用于表达非代码相关的信息，它是一个JSON格式的文件-package.json，位于包的根目录下，是包的重要组成部分。
        package.json中的字段：
            name,description,version,keywords,maintainers,dependencies,homepage......
            
*/ 