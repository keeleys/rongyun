package cc.sitec.rongyun.service;
import cc.sitec.rongyun.config.Content;
import io.rong.RongCloud;
import io.rong.methods.user.User;
import io.rong.models.response.TokenResult;
import io.rong.models.user.UserModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

/**
 *
 * @author keeley
 * @date 18/10/8 09:43 
 */
@Service
public class RongyunService {
	public static final Logger logger = LoggerFactory.getLogger(RongyunService.class);
	@Autowired
	public Environment env;

	public String getToken(String memberId, String memberName) throws Exception {
		String defaultImg = "http://www.rongcloud.cn/images/logo.png";
		return this.getToken(memberId,memberName,defaultImg);
	}
	public String getToken(String memberId, String memberName, String memberImage) throws Exception {
		RongCloud rongCloud = RongCloud.getInstance(Content.appKey, Content.appSecret);
		User User = rongCloud.user;
		UserModel user = new UserModel()
				.setId(memberId)
				.setName(memberName)
				.setPortrait(memberImage);
		TokenResult result = User.register(user);
		logger.info("getToken:{}", result);
		return result.getToken();
	}
}
